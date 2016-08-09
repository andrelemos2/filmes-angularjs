angular.module("Filmes").controller('FilmesController', function($scope){
	$scope.titulo = "Filmes que já assisti";

	$scope.filmes = [
		{
			id: "123456",
			titulo: "Deadpool",
			ano: "2016",
			produtora: "Fox",
			sinopse: "Baseado no anti-herói não convencional da Marvel Comics, Deadpool conta a história da origem do ex-agente das Forças Especiais que se tornou o mercenário Wade Wilson. Depois de ser submetido a um desonesto experimento que o deixa com poderes de cura acelerada, Wade adota o alter ego de Deadpool. Armado com suas novas habilidades e um senso de humor negro e distorcido, Deadpool persegue o homem que quase destruiu sua vida.",
			cartaz: "http://www.zeronave.com/attachments/a39c50677376dd146658c2dab7b449a6c336f7a8/store/fedecab39799be2c1b7874e509535e7ff3224201b48c1faca9c98ca9071e/poster_image.jpg"
		},
		
		{
			id: "123457",
			titulo: "FIGHT CLUB",
			ano: "1999",
			produtora: "Fox",
			sinopse: "Jack (Edward Norton) é um executivo que trabalha como investigador de seguros, tem uma boa vida financeira, mas sofre com problemas de insônia. Para tentar se curar, ele começa a freqüentar terapias em grupo, mas sua vida vira de cabeça para baixo quando ele conhece Tyler (Brad Pitt). Com ele, forma um clube da luta, onde pessoas são amigas, mas se esmurram violentamente em algumas noites. Tudo ganha propósitos maiores quando as coisas começam a ficar loucas e surreais.",
			cartaz: "http://www.zeronave.com/attachments/942366fd59ed8f505fdd6290a74f395fd654d03b/store/1d9c45cf6081ede0005eae5101490da9cde4de015722150d86c4e3d303da/poster_image.jpg"
		}
	];

	$scope.novoFilme = {};

	$scope.removerFilme = function(id) {
		angular.forEach($scope.filmes, function(filme, i) {
			if (filme.id == id) {
				$scope.filmes.splice(i, 1);
			}
		});
	};

	$scope.adicionarFilme = function() {
		var filme = angular.copy($scope.novoFilme);
		filme.id = Date.now()
		$scope.filmes.push(filme);

		$scope.novoFilme = {};
	}
});;