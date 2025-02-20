/**
 * Footer Component
 * 
 * Renders the footer section of the application, 
 * including navigation links and copyright information.
 * 
 * Props: None
 * Returns: JSX element for the footer.
 * 
 * Key Features:
 * - Uses MenuLinks component for navigation.
 * - Displays copyright notice.
 * 
 * @component
 * @author Ceyda Aleyna Altun
 * @date 2023-10-04
 */
import MenuLinks from '@/components/MenuLinks';

export default function Footer() {


    const classNames = {
        container: 'flex min-w-full justify-evenly',
        link: '-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-bg-secondary',
        linkText: 'md:block',
        iconContainer: 'hidden',
        iconLink: 'icon-link-class',
        icon: 'text-4xl',
    };

    return (
        <section className='border-t border-gray-300 '>
            <div className='max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8'>
                <MenuLinks
                    classNames={classNames}

                />
                <div>
                    <p className='mt-8 text-base leading-6 text-center text-gray-400'>
                        © 2025 TERRA, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
};


