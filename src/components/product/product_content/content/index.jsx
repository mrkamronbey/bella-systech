import React from 'react'
import styles from "./style.module.css"
const Content = () => {
  return (
    <div className={styles.Wrapper}>
        <h3>Наименование товара</h3>
        <p>• Ультрасовременная запатентованная насадка,обновленный мотор и иглы, предназначенные длябыстрого, аккуратного и точного введения в кожу
• Повышенный комфорт в каждом импульсе
• Тысячи клинических тестов обеспечиваютоптимизированные протоколы для каждоготипа кожи и возраста
• Единственная система для измеренияпоставляемой энергии</p>
        <div className={styles.buttons}>
            <a href=""><i class='bx bxs-file-doc' ></i>Подробная информация</a>
            <button>Связаться для оформления заказа</button>
        </div>
    </div>
  )
}

export default Content