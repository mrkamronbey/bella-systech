import React from 'react'
import Banner from '../../../../common/banner/index'
import BannerImg from '../../../../assets/banner/banner_img1.png'

const BannerCard = ({ filterCompany }) => {
    function LanguValue() {
        return window.localStorage.getItem("i18nextLng");
    }
    return (
        <>
            {
                filterCompany.map(elem => elem.aparat.map(item => (
                    <Banner
                        title={
                            LanguValue() == 'uz' ? item.name_uz : LanguValue() == 'ru' ? item.name_ru : LanguValue() == 'en' ? item.name_en : null
                        }
                        description={
                            LanguValue() == 'uz' ?
                                `${item.description_uz.slice(0, 250)}...` :
                                LanguValue() == 'ru' ?
                                    `${item.description_ru.slice(0, 250)}...` :
                                    LanguValue() == 'en' ?
                                        `${item.description_en.slice(0, 250)}` : null
                        }
                        img={item.image1}
                        link={`/product/${item.id}`}
                    />
                )))
            }
        </>
    )
}

export default BannerCard