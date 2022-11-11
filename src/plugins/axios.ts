import axios from 'axios';
import i18n from './i18n';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['content-language'] = i18n.language || 'es';
axios.defaults.headers.common.utcoffset = '-300';
axios.interceptors.response.use((response) => response.data);

export default axios;
