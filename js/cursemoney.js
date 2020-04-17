//fc3b3db0fb218a7820f0fe94b9403c98
$(document).ready(function(){
    // $('.money').click(function(){
        const apiFixer = 'http://data.fixer.io/api/latest';

        const keyFixer = {'access_key': 'fc3b3db0fb218a7820f0fe94b9403c98'};

        let moneyBlock = $('.money_block');

        $.get(apiFixer, keyFixer, function(response){
                // $('.money_block').text(response.rates);
                // $('.money_block').html(
                //     `<p>RUB/EUR ${response.rates.RUB}</p>
                //     <p>EUR ${response.rates.EUR}</p>
                //     <p>USD/EUR ${response.rates.USD}</p>`);
                    
                    let dol = response.rates.USD;
                        euro = response.rates.EUR;
                        rub = response.rates.RUB;
                        
                        rubEur = (rub * euro).toFixed(3);
                        rubDol = (rubEur/dol).toFixed(3);

                    moneyBlock.html(
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