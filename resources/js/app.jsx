// Import React at the beginning of your script
import React from 'react';
import '../css/app.css';
// Other imports...
import { createRoot } from 'react-dom/client';
import { hydrate } from 'react-dom';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';



const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        console.log('Current route:', props);
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
