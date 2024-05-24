import React, {useState, useEffect} from 'react';
import './Task2.css';

export function Task2_1() {
    return (
        <div className="task2_1-container">
            task2_1
            <h1>Футбольный клуб: Барселона</h1>

            <div className="club-info">
                <h2>Информация о клубе</h2>
                <p><strong>Название:</strong> Барселона</p>
                <p><strong>Город:</strong> Барселона, Испания</p>
                <p><strong>Дата основания:</strong> 29 ноября 1899 года</p>
                <p><strong>Герб:</strong></p>
                <img src="/img/FC-Barcelona.png" alt="FC Barcelona Logo"/>
            </div>

            <div className="achievements">
                <h2>Достижения клуба</h2>
                <ul>
                    <li>Ла Лига: 26 титулов</li>
                    <li>Кубок Испании: 30 титулов</li>
                    <li>Лига Чемпионов: 5 титулов</li>
                    <li>Суперкубок УЕФА: 3 титула</li>
                    <li>Клубный чемпионат мира: 3 титула</li>
                </ul>
            </div>

            <div className="current-squad">
                <h2>Текущий состав команды</h2>
                <ul>
                    <li>Лионель Месси</li>
                    <li>Жерар Пике</li>
                    <li>Антуан Гризманн</li>
                    <li>Серхио Бускетс</li>
                    <li>Френки де Йонг</li>
                </ul>
            </div>
        </div>
    );
}

const styles = ['style1', 'style2', 'style3'];

export function Task2_2() {
    const [style, setStyle] = useState('');

    useEffect(() => {
        const randomStyle = styles[Math.floor(Math.random() * styles.length)];
        setStyle(randomStyle);
    }, []);

    return (

        <div className={`task2_2-container ${style}`}>
            task2_2
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


