import dynamic from 'next/dynamic';

export default {
    'components/Article': () => dynamic(import('./components/Article')),
    'components/ThirdPartyComponent': () => dynamic(import('./components/ThirdPartyComponent'))
}