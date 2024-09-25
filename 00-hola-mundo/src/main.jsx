import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import './app.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'


createRoot(document.getElementById('root')).render(
    < App />
)
