import React from "react";
import "./NoPage.css";
import { useNavigate } from "react-router-dom";

export default function NoPage() {
  const navigate = useNavigate();

  return (
      <section className="nopage">
        <div className="nopage__wrapper">
          <h1 className="nopage__title">404</h1>
          <h2 className="nopage__subtitle">Страница не найдена.</h2>
          <span onClick={() => navigate(-1)} className="nopage__button">
            Назад
          </span>
        </div>

      </section>
  );
}
