import React from 'react';

function Layout ({ children }){
    return(
        <div className={`font-sans bg-[url('/img.jpg')] bg-cover text-white pt-[2%]`}>
            <div className='min-h-screen items-center justify-center'>
                {children}
            </div>
        </div>
    );
}

export default Layout;