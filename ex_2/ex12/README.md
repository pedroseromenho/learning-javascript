# **Ex_12** - Conversion de température Celsius, Fahrenheit et Kelvin
[Voir résultat](https://pedroseromenho.github.io/learning-javascript/ex_2/ex12/)

Créer un bouton. Au click de ce bouton, on lance la fonction `conversionTemperature`.

L'utilisateur choisit d'abord dans le menu affiché quel type de conversion il souhaite, il indique son choix en indiquant le numéro correspondant dans le menu au moyen d'un prompt javascript

Ensuite, un second prompt va lui demander la température à convertir et afficher le résultat dans une boîte d'alerte.

Le menu :

0. Fin du programme
1. De Celsius vers Fahrenheit
2. De Celsius vers Kelvin
3. De Fahrenheit vers Celsius
4. De Fahrenheit vers Kelvin
5. De Kelvin vers Celsius
6. De Kelvin vers Fahrenheit

Pour calculer la conversion, utilisez les formules suivantes :

	[°F] = ([°C] x 9/5) + 32
	[K] = [°C] + 273,15
	[°C] = ([°F] - 32) / (9/5)
	[K] = (([°F] - 32) x (5/9)) + 273,15
	[°C] = [K] - 273,15
	[°F] = ([K] x 9/5) - 459,67

	où [K] représente la température en kelvin
	où [°F] représente la température en degrés Fahrenheit
	où [°C] représente la température en degrés Celsius

Exemples de valeurs à tester :
- 0 K = -273,15 °C = -459,67 °F
- 283,15 K = 10 °C = 50 °F
- 273,15 K = 0 °C = 32 °F
- 373,15 K = 100 °C = 212 °F
- 233,15 K = -40 °C = -40 °F
