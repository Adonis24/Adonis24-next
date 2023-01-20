import React, { Component } from "react";
import Link from 'next/link';
import Top from "./Top"
import styles from './style.module.scss'



const Navigation = () => {
    return (

      <nav id="menu" className="navbar  navbar-expand-lg navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-brand">
            
          <button class="navbar-toggler collapsed" 
            type="button" 
            data-bs-toggle="collapse"
            data-bs-target="#bs-example-navbar-collapse-1" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      {" "}
      {" "}
    
    </button>
    {""}
    {""}
    {""}
    {""}
                <a className="navbar-brand " href="#page-top">
              АДОНИС
            </a>{""}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
       
              <li className="nav-item">
                <Link href="#about" className="nav-link">
                  О Компании  
                </Link>
              </li>
              <li className="nav-item">
                <a href="#features" className="nav-link ">
                  База знаний
                </a>
              </li>
              <li className="nav-item">
                <Link href="#services" className="nav-link">
                  Услуги
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#portfolio" className="nav-link">
                  Наши проекты
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#testimonials" className="nav-link">
                  Отзывы
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#team" className="nav-link">
                  Команда
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#contact" className="nav-link">
                  Контакты
                </Link>
              </li>
              <li className="nav-item">
              <Top className="nav-link"/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

export default Navigation;
