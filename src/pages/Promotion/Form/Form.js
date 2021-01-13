import React from 'react'
import PagesPromotionSearch from '../Search/Search'
import { useParams } from 'react-router-dom'

const PagesPromotionForm = () => {
    const { id } = useParams();
    return (
        <div>
            Form
            {id && <div>id: {id}</div>}
        </div>
    )
}

export default PagesPromotionForm