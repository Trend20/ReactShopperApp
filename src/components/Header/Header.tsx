import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Header() {
  return (
   <Router>
      <div className='header' style={styles.header}>
        <div className="logo">
          <Link to="/" style={styles.logoStyle}>Shopper</Link>
        </div>
        <div className="navbar" style={styles.navbar}>
          <nav className="nav" style={styles.nav}>
            <ul style={styles.ulStyle}>
              <Link to="/login" className='btn btn-primary' style={styles.linkStyle}>Login</Link>
              <Link to="/signup" className='btn btn-primary' style={styles.linkStyle}>Sign up</Link>
            </ul>
          </nav>
        </div>
      </div>
    </Router>
  )
}

const styles = {

   header:{
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'space-around',
     width: '100%',
     padding: 18,
   },
   logoStyle:{
      padding: 15,
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '1rem'
   },
   navbar:{
     display: 'flex',
     width: '20%'
   },

   nav:{
     width: '100%',
     display:'flex'
   },

   ulStyle:{
     display: 'flex',
     width: '100%',
     alignItems: 'center',
     justifyContent: 'center'
   },
   linkStyle:{
     display: 'flex',
     padding: '10px',
     width: '100%',
     alignItems:'center',
     justifyContent:'center',
     marginLeft: '15px',
     textDecoration: 'none',
   }
}

export default Header