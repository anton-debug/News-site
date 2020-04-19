//fc3b3db0fb218a7820f0fe94b9403c98
$(document).ready(function(){
    // $('.money').click(function(){
        const API_FIXER = 'http://data.fixer.io/api/latest'; /* Жестко заданная константа, поэтому пишется в верхнем регистре */

        const KEY_FIXER = 'fc3b3db0fb218a7820f0fe94b9403c98'; /* Жестко заданная константа, поэтому пишется в верхнем регистре */

        const money_block = $('.js-money_block'); /* Неизвестная до загрузки страницы константа, поэтому пишется в нижнем регистре */

        

        $.get(API_FIXER, {'access_key': KEY_FIXER}, function(response){
                // $('.money_block').text(response.rates);
                // $('.money_block').html(
                //     `<p>RUB/EUR ${response.rates.RUB}</p>
                //     <p>EUR ${response.rates.EUR}</p>
                //     <p>USD/EUR ${response.rates.USD}</p>`);
                    
                    const dol = response.rates.USD; /* Эти константы можно записать в нижнем регистре, т.к. они неизвестны до загрузки страницы */
                        euro = response.rates.EUR;
                        rub = response.rates.RUB;
                        
                    const rubEur = (rub * euro).toFixed(3);
                    const rubDol = (rubEur/dol).toFixed(3);

                    money_block.html(
                        `<tr>
                            <td>
                                <b>&#8364</b>
                                ${rubEur} 
                                <b>&#8381</b>
                            </td>

                            <td>
                                <b>&#36</b>
                                ${rubDol} 
                                <b>&#8381</b>
                            </td>
                        </tr>
                    `);
                // $('.money_block').text('Rub ' + response.rates.EUR);
                // $('.money_block').text('Rub ' + response.rates.USD);
                // // response();
                // response.rates = 'rub';

            }
        );
    });