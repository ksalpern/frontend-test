import React, { useState } from 'react'
import './GetStarted.scss'
import plus from '../../../assets/plus.svg'
import minus from '../../../assets/minus.svg'

const dataForAccordion = [
    {
        header: 'What can I do to protect our planet?',
        descr: ' Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources '
    },
    {
        header: 'How to save nature ecology?',
        descr: ' Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources '
    },
    {
        header: 'What is nature conservation?',
        descr: ' Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources '
    }
]

const GetStarted = () => {
    const [open, setOpen] = useState(null);

    const handleOpen = i => {
        if (open === i) {
            return setOpen(null)
        }
        setOpen(i)
    }

    return (
        <div className='getStarted'>
            <div className="getStarted__left">
                <h2>Ready to Get started?</h2>
                <p>When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.</p>
                <button className="btn">Contact us</button>
            </div>
            <div className="getStarted__options">
                <ul className='accordion'>
                    {dataForAccordion.map((item, i) => (
                        <li key={i}>
                            <div className='accordion__title'>
                                <h3>{item.header}</h3>
                                <button onClick={() => handleOpen(i)}>
                                    <img src={open === i ? minus : plus} alt="" />
                                </button>
                            </div>
                            <div className={open === i ? 'accordion__content show' : 'accordion__content'}>
                                <p className='descr'>{item.descr}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default GetStarted