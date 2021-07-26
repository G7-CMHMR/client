import React from 'react'
import PanelMenuAdmin from '../components/Utils/PanelMenu/PanelMenuAdmin'
import Separate from '../components/Utils/Separate/Separate'

export default function AdminPanel() {
    return (
        <div className='PanelContainerPanel'>
        <Separate></Separate>

        <div id='PanelContentDetail'>
            <PanelMenuAdmin></PanelMenuAdmin>
        </div>

        <Separate></Separate>
    </div>
    )
}
