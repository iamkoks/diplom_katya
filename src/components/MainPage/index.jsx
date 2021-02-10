import React from 'react'
import { MAN } from '../../styles/images'
import { items, vacansy } from './items.js'

import './index.scss'
import MyMap from './Map'

const MainPage = () => {
  return(
    <div className='main'>
      <div className='main__container'>
        <div className='main__wrapper'>
          <div className='main__history'>
            <div className='main__history-content'>
              <span className='main__history-content-title'>История развития</span>
              <p className='main__history-content-text'>
                Открытое акционерное общество «Березовский комбикормовый завод» ведет свою историю с 19 июля 1944 года, когда после освобождения Березовского района от немецко-фашистских захватчиков в д. Блудень был организован хлебоприемный пункт «Заготзерно», основной деятельностью которого была приемка зерна продовольственного и фуражного, необходимого для нужд фронта.
                По окончании строительства и ввода в эксплуатацию в 1975 году комбикормового цеха, производительностью 100 тонн комбикормов в сутки, хлебоприемный пункт «Заготзерно» был реорганизован в Березовский комбикормовый завод. В 1985 году на предприятии введено в эксплуатацию металлическое зернохранилище емкостью 43,3 тысячи тонн с приемным устройством для одновременной выгрузки двух железнодорожных вагонов. 27 мая 1994 года предприятие, согласно решения Мингосимущества, преобразовано в Открытое акционерное общество.
                Во время годового капитального ремонта в комбикормовом цехе в январе-феврале 2000 года произведена замена линии дозирования-смешивания. Вместо объемных дозаторов установлены ленточные весовые дозаторы. В то время это высокотехнологичный производственный комплекс комбикормов, включающий в себя 12 дозаторов, смеситель и систему управления, которая дает возможность автоматической настройки дозаторов, оперативно переходить на другие рецепты комбикормов, автоматический контроль всех параметров дозирования-смешивания, исключает ошибки обслуживающего персонала.
              </p>
            </div>
            <div style={{height: '150px', overflow:'hiden', backgroundColor:'#2b50ed'}}>
              <svg 
                viewBox="0 0 500 150" 
                preserveAspectRatio="none" 
                style={{height: '100%', width: '100%'}}>
                  <path 
                    d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" 
                    style={{stroke: 'none', fill: 'white'}}>
                  </path>
              </svg>
            </div>
          </div>
          <div className='main__company'>
            <div className='main__company-content'>
              <img 
                src={MAN} 
                alt=''
                style={{width: '400px', height: '400px'}}
              />
              <div>
                <span className='main__company-content-title'>Предприятие сегодня</span>
                <p className='main__company-content-text'>
                  Девиз предприятия «Качество продукции — основа благополучия!»
                  Самым значимым для предприятия стал 2010 год, было реализовано два инвестиционных проекта: установлена линия по переработке маслосемян рапса производительностью 30 тысяч тонн в год и построено новое здание, где смонтирована и введена в действие линия по гранулированию и экспандированию комбикормов производительностью 10 тонн в час. 
                  В 2010 году за многолетний вклад в развитие сельскохозяйственной отрасли, достижение высоких экономических показателей и в связи с Днем работников сельского хозяйства и перерабатывающей промышленности директор предприятия М.Н. Козека Удостоен Почетной грамоты Министерства сельского хозяйства и продовольствия республики Беларусь.
                  С 16 мая 2012 года в аренде находится свиноводческо-товарная ферма СПК «Агрофирма «Малеч» в д. Хойники. В течении 2012 и 2013 годы смонтированы и сданы в эксплуатацию три металлические зернохранилища для хранения маслосемян рапса. В 2013 году произведена модернизация цеха по производству россыпных комбикормов, реализован проект «Монтаж линии предварительного смешивания и линии микродозирования сырья, автоматизация технологического процесса сырья».
                  В 2013 году произвели замену электрооборудования и физически изношенного транспортного оборудования на металлическом зернохранилище. Установили дополнительный пост охраны. Территории предприятия для контроля, сохранности сырья и продукции оснащена камерами видеонаблюдения.
                  В январе 2014 года завершена модернизация цеха производства рассыпных комбикормов с установкой линии дробления сырья.
                </p>
              </div>
            </div>
            <div style={{height: '150px', overflow:'hiden', backgroundColor:'white'}}>
              <svg 
                viewBox="0 0 500 150" 
                preserveAspectRatio="none" 
                style={{height: '100%', width: '100%'}}>
                  <path 
                    d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" 
                    style={{stroke: 'none', fill: '#2b50ed'}}>
                  </path>
              </svg>
            </div>
          </div>
          <div className='main__quality'>
            <div className='main__quality-header'>
              <span className='main__quality-header-title'>Система качества</span>
              <p className='main__quality-header-text'>В настоящее время на ОАО «Березовский комбикормовый завод» действуют следующие системы качества:</p>
            </div>
            <div className='main__quality-cards'>
              {items.map((item, index) => {
                  return(
                  <div className='main__quality-card' key={index}>
                    <img 
                      src={item.img} 
                      alt=''
                      style={{width: '200px', height: '200px'}}
                    />
                    <span className='main__quality-card-text'>{item.title}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='main__points'>
            <span className='main__points-title'>Наши фирменные торговые точки</span>
            <MyMap/>
          </div>
          <div className='main__shareholder'>
            <span className='main__shareholder-title'>Информация для акционеров</span>
            <a href='http://bkz.epfr.by/' className='main__shareholder-button'>Посмотреть</a>
          </div>
          <div className='main__vacancy'>
            <div className='main__vacancy-header'>
              <span className='main__vacancy-header-title'>Вакансии</span>
              <p className='main__vacancy-header-text'>В настоящий момент мы ищем сотрудников на следующие должности:</p>
            </div>
            <div className='main__vacancy-cards'>
              {vacansy.map((item, index) => {
                  return(
                  <div className='main__vacancy-card' key={index}>
                    <span className='main__vacancy-card-title'>{item.title}</span>
                    <p 
                      className='main__vacancy-card-text'
                      dangerouslySetInnerHTML={{__html : item.text}}
                    />
                  </div>
                )
              })}
            </div>
            <div className='main__question'>
              <iframe
                title='Опрос' 
                src='https://docs.google.com/forms/d/e/1FAIpQLScoiI_2NuvBg38f8BjmGWJiC3NPVcN9-YG8p4vt9_5E_1_tYA/viewform?embedded=true' 
                width='100%' 
                height="740px" 
                frameborder="0" 
                marginheight="0" 
                marginwidth="0"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage