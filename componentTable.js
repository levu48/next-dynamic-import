import dynamic from 'next/dynamic';
export default { 
'components/Article': () => dynamic(import('./components/Article')),
'components/ArticleList': () => dynamic(import('./components/ArticleList')),
'components/ThirdPartyComponent': () => dynamic(import('./components/ThirdPartyComponent')),
}
