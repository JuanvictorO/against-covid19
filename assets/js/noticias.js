$(function() {
    $('.principal').append(
        $('<div>').addClass('container').append(
            $('<section>').addClass('news').append(
                $('<h1>').addClass('color-1').addClass('text-center').text('NOTÍCIAS')
            ).append(
                $('<div>').addClass('row').append(
                    $('<div>').addClass('col-md-9').append(
                        $('<div>').addClass('row').append(
                            $('<div>').addClass('col-lg-4').append(
                                $('<img>').addClass('img-fluid').attr('src', '../assets/img/proteja-se.jpg')
                            )
                        ).append(
                            $('<div>').addClass('col-lg-8').addClass('text-news').append(
                                $('<h4>').addClass('title-news').text('Ministério da Saúde anuncia orientações para evitar a disseminação do coronavírus')
                            ).append(
                                $('<p>').addClass('resume-news').text('Medidas do dia a dia, como lavar as mãos e evitar aglomerações, reduzem o contágio da doença.')
                            ).append(
                                $('<p>').addClass('date-news').text('15 de março de 2020 às 20:43')
                            ).append(
                                $('<div>').addClass('text-right').append(
                                    $('<a>').attr('target', '_blank').attr('href', 'http://www.gssaude.com.br/noticias/detalhes/49/ministerio-da-saude-anuncia-orientacoes-para-evitar-a-disseminacao-do-coronavirus.html').append(
                                        $('<button>').addClass('btn').text('Ver Mais')
                                    )
                                )
                            )
                        ).append(
                            $('<div>').addClass('col-lg-4').append(
                                $('<img>').addClass('img-fluid').attr('src', '../assets/img/alcool.jpg')
                            )
                        ).append(
                            $('<div>').addClass('col-lg-8').addClass('text-news').append(
                                $('<h4>').addClass('title-news').text('Mutação do coronavírus se espalhou amplamente pela Europa em 2ª onda')
                            ).append(
                                $('<p>').addClass('resume-news').text('Centenas de mutações do novo coronavírus já foram identificadas na Europa. Mas, de acordo com um')
                            ).append(
                                $('<p>').addClass('date-news').text('15 de março de 2020 às 20:43')
                            ).append(
                                $('<div>').addClass('text-right').append(
                                    $('<a>').attr('target', '_blank').attr('href', 'https://www.uol.com.br/vivabem/noticias/redacao/2020/10/29/mutacao-do-coronavirus-causou-2-onda-de-covid-19-na-europa-aponta-estudo.htm').append(
                                        $('<button>').addClass('btn').text('Ver Mais')
                                    )
                                )
                            )
                        ).append(
                            $('<div>').addClass('col-lg-4').append(
                                $('<img>').addClass('img-fluid').attr('src', '../assets/img/mask.jpg')
                            )
                        ).append(
                            $('<div>').addClass('col-lg-8').addClass('text-news').append(
                                $('<h4>').addClass('title-news').text('EUA registram 91 mil casos de coronavírus em 24 horas, maior número diário desde início da pandemia')
                            ).append(
                                $('<p>').addClass('resume-news').text('País se aproxima dos 9 milhões de casos. Nova onda da Covid-19 ocorre a menos de uma semana da eleição presidencial nos EUA.')
                            ).append(
                                $('<p>').addClass('date-news').text('15 de março de 2020 às 20:43')
                            ).append(
                                $('<div>').addClass('text-right').append(
                                    $('<a>').attr('target', '_blank').attr('href', 'https://g1.globo.com/mundo/noticia/2020/10/29/eua-registram-91-mil-casos-de-coronavirus-em-24-horas-maior-numero-diario-desde-inicio-da-pandemia.ghtml').append(
                                        $('<button>').addClass('btn').text('Ver Mais')
                                    )
                                )
                            )
                        ).append(
                            $('<div>').addClass('col-lg-4').addClass('hide-news').append(
                                $('<img>').addClass('img-fluid').attr('src', '../assets/img/human.jpg')
                            )
                        ).append(
                            $('<div>').addClass('col-lg-8').addClass('hide-news').addClass('text-news').append(
                                $('<h4>').addClass('title-news').text('MinistéCom novo aumento de casos de coronavírus, SC passa a marca de 12 mil contaminados ativosrio da Saúde anuncia orientações para evitar a disseminação do coronavírus')
                            ).append(
                                $('<p>').addClass('resume-news').text('Santa Catarina passou a marca de 12 mil pacientes ativos para coronavírus - aqueles contaminados e capazes de transmitir - nesta quinta-feira (29).')
                            ).append(
                                $('<p>').addClass('date-news').text('15 de março de 2020 às 20:43')
                            ).append(
                                $('<div>').addClass('text-right').append(
                                    $('<a>').attr('target', '_blank').attr('href', 'https://www.nsctotal.com.br/noticias/com-novo-aumento-de-casos-coronavirus-sc-passa-a-marca-de-12-mil-contaminados-ativos').append(
                                        $('<button>').addClass('btn').text('Ver Mais')
                                    )
                                )
                            )
                        ).append(
                            $('<div>').addClass('col-lg-4').addClass('hide-news').append(
                                $('<img>').addClass('img-fluid').attr('src', '../assets/img/mask2.jpg')
                            )
                        ).append(
                            $('<div>').addClass('col-lg-8').addClass('hide-news').addClass('text-news').append(
                                $('<h4>').addClass('title-news').text('Para conter o coronavírus, Macron anuncia confinamento na França ')
                            ).append(
                                $('<p>').addClass('resume-news').text('Medida, que passa a valer a partir da próxima sexta-feira, tenta reduzir o ritmo de propagação da covid-19 no país.')
                            ).append(
                                $('<p>').addClass('date-news').text('15 de março de 2020 às 20:43')
                            ).append(
                                $('<div>').addClass('text-right').append(
                                    $('<a>').attr('target', '_blank').attr('href', 'https://noticias.r7.com/internacional/para-conter-o-coronavirus-macron-anuncia-confinamento-na-franca-28102020').append(
                                        $('<button>').addClass('btn').text('Ver Mais')
                                    )
                                )
                            )
                        ).append(
                            $('<div>').addClass('div-button').addClass('col-12').append(
                                $('<button>').attr('id', 'show').text('Carregar mais')
                            )
                        )
                    )
                ).append(
                    $('<div>').addClass('col-md-3').addClass('data').append(
                        $('<h6>').addClass('title-data').text('Casos no Brasil')
                    ).append(
                        $('<div>').addClass('brazil').addClass('countries')
                    ).append(
                        $('<h6>').addClass('title-data').text('Casos na China')
                    ).append(
                        $('<div>').addClass('china').addClass('countries')
                    ).append(
                        $('<h6>').addClass('title-data').text('Casos nos EUA')
                    ).append(
                        $('<div>').addClass('us').addClass('countries')
                    ).append(
                        $('<h6>').addClass('title-data').text('Casos na Itália')
                    ).append(
                        $('<div>').addClass('italy').addClass('countries')
                    )
                )
            )
        )
    );

    $('.title-news').line(2, '...');
    $('.resume-news').line(2, '...');
    $('.hide-news').hide();

    $('#show').click(function() {
        $('.div-button').hide();
        $('.hide-news').show(300);
    });

    $array = ['brazil', 'china', 'us', 'italy'];
    for ($x = 0; $x < 4; $x++) {
        $.ajax({
            data: "",
            type: "GET",
            url: "https://covid19-brazil-api.now.sh/api/report/v1/" + $array[$x],
            async: false,
            success: function(json) {
                $json = json.data;
                $html = '<p><i class="fas fa-check-circle" style="color:green;margin-right: 10px"></i>' + $json.confirmed + ' Confirmados</p>';
                $html += '<p><i class="fas fa-exclamation-circle" style="color:red;margin-right: 10px"></i>' + $json.cases + ' Ativos</p>';
                $html += '<p><i class="fas fa-heartbeat" style="color:green;margin-right: 10px"></i>' + $json.recovered + ' Recuperados</p>';
                $html += '<p><i class="fas fa-skull-crossbones" style="color:red;margin-right: 10px"></i>' + $json.deaths + ' Mortos</p>';
                console.log($html);
                $('.' + $array[$x]).append($html);
            }
        });
    }
});