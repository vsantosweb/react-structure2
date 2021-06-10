/*
 * React Structure
 *
 * (c) Vitor Santos <vitor@vsantosweb.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/


import api from '../..';
import { trackPromise } from 'react-promise-tracker';

export const register = (request, wait, where) => {
    
    let data = api.post('{your-url-api}', request)
        .then(response => response.data)
        .catch(error => error.response)

    return wait ? trackPromise(data, where || null) : data;

}
