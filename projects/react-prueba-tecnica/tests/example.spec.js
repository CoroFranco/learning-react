// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'
const CAT_ENDPOINT_IMAGE = 'https://cataas.com/cat/says/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const img = await page.getByRole('img')

  const textContent = await text.textContent()
  const imgUrl = await img.getAttribute('src')

  console.log(textContent, imgUrl)
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imgUrl?.startsWith(CAT_ENDPOINT_IMAGE)).toBeTruthy()
})
