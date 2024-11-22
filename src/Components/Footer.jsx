import React from 'react'

function Footer() {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4 sticky-bottom">
  <aside>
    <p>Kasansa Kuya © {new Date().getFullYear()}</p>
  </aside>
</footer>
  )
}

export default Footer