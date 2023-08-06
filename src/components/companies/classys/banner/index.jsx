import React from 'react'
import Banner from '../../../../common/banner/index'
import BannerImg from '../../../../assets/banner/banner_img1.png'

const BannerCard = () => {
    const arr = [1, 2, 3, 4, 5, 6]
    return (
        <>
            {
                arr.map(() => (
                    <Banner
                        title="Идеальная система для омоложения кожи и доставки космецевтических средств"
                        description=' Уникальная система, сочетающая в себе тулиевый лазер и эксклюзивную линию космецевтики'
                        link='/product'
                        img={BannerImg}
                    />
                ))
            }
        </>
    )
}

export default BannerCard