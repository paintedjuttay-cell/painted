
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Header from './components/Header'
import Hero from './components/Hero'
import Collections from './components/Collections'
import CustomOrder from './components/CustomOrder'
import Artists from './components/Artists'
import About from './components/About'
import Footer from './components/Footer'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-background">
          <Header />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <Collections />
                <CustomOrder />
                <Artists />
                <About />
              </main>
            } />
          </Routes>
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
