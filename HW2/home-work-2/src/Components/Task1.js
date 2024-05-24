import React from "react";
import './Task1.css'

export function Task1() {
    return (
        <div className="task1-container">
            task1
            <h1>Великий человек: Стив Джобс</h1>
            <div className="info-section">
                <h2>ФИО</h2>
                <p>Стивен Пол Джобс</p>
            </div>
            <div className="info-section">
                <h2>Дата рождения</h2>
                <p>24 февраля 1955</p>
            </div>
            <div className="info-section">
                <h2>Портрет</h2>
                <img src="/img/Steve_Jobs_Headshot_2010-CROP.jpg" alt="Steve Jobs"/>
            </div>
            <div className="info-section">
                <h2>Краткая биография</h2>
                <p>
                    Стив Джобс был американским предпринимателем, изобретателем и промышленным дизайнером. Он был
                    соучредителем Apple Inc., а также возглавлял Pixar Animation Studios и был членом совета директоров
                    The Walt Disney Company после приобретения Pixar. Стив Джобс считается одним из пионеров
                    компьютерной революции 1970-х и 1980-х годов и считается одним из величайших бизнес-магнатов всех
                    времен.
                </p>
            </div>
        </div>
    );
}