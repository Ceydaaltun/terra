/**
 * Menu Component
 * 
 * Renders a responsive navigation menu with a hamburger icon. 
 * Displays menu links in a dialog when the icon is clicked.
 * 
 * Props: None
 * Returns: JSX element for the menu.
 * 
 * Key Features:
 * - Uses Headless UI for dialog management.
 * - Integrates Hamburger icon for toggling the menu.
 * 
 * @component
 * @author Ceyda Aleyna Altun
 * @date 2023-10-04
 */

'use client'

import { Dialog, DialogPanel} from '@headlessui/react'
import { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { michroma } from './Fonts'
import MenuLinks from './MenuLinks'

const classNames = {
    container: 'space-y-2 py-6',
    link: '-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-bg-secondary',
    linkText: 'md:block',
    iconContainer: 'py-9 flex flex-row gap-2',
    iconLink: 'icon-link-class',
    icon: 'text-4xl',
};

export default function Menu() {

    let [isOpen, setIsOpen] = useState(false)

    const handleMenuClose = () => {
        setIsOpen(false);
    };

    return (
        <>

            <div>
                <Hamburger
                    toggled={isOpen}
                    toggle={setIsOpen}
                />
                <Dialog open={isOpen} onClose={handleMenuClose} className='relative z-50'>
                    <div className=' fixed inset-0 p-4'>
                        <DialogPanel className={`${michroma.className} absolute top-20 left-0 md:w-4/12 h-full overflow-y-auto bg-black bg-opacity-50 px-6 py-6`}>
                            <div className='divide-y divide-gray-500/10'>
                                <MenuLinks onLinkClick={handleMenuClose} classNames={classNames}/>
                            </div>
                        </DialogPanel>
                    </div>

                </Dialog>
            </div>


        </>
    )
}