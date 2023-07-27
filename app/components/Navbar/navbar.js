"use client";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Link from 'next/link';


export default function Navbar() {

  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  
    return ( 
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top" >
        <div class="container-fluid" >
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link class="navbar-brand" href="/">LatamNews</Link>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link  class="nav-link active"  href="/Sports">Sports</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="/Technology">technology</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="/business">Business</Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
            <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchValue}
            onChange={handleInputChange}
          />

              <Link class="navbar-brand" href={`/Search/${searchValue}`}> 
                    <button class="btn btn-primary" type="submit">Search</button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    );
  }