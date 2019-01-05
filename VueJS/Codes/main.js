
var app = new Vue({
    // Syntaxe : les déclarations et assignations doivent avoir ce format: madonnee: "mavaleur",
    // Attention : on ne sépare pas avec des points-virgules ce qui se trouve dans l'instance de classe Vue, mais on peut écrire du JS normal en-dehors de l'objet Vue.

    // [1] el: cible un élément dans l'HTML. Ici, on cible l'élément qui a l'id "app".
    el: '#app',

    // [2] data: on stocke ici toutes les "données" qu'on va appeler dans le HTML. Ca ressemble un peu à des variables.
    data: {
        product: 'Socks',
        description: 'La mer est bleue comme tes yeux... Elle me fait peur, elle me fait mal. Elle est cruelle, elle est brutale.',
        // [2 bis] la donnée "image" prend ici la valeur boots.jpg. v-bind:src="image" est donc égal à src="boots.jpg".
        image: 'boots.jpg',

        variants: [
            {
                variantId: 1000,
                variantOrientation: 'gauche',
                variantImage: 'bootsreverse.jpg'
            },
            {
                variantId: 2000,
                variantOrientation: 'droite',
                variantImage: 'boots.jpg'
            }
        ],
        // [3] comme pour le [2], les attributs du <a> sont renseignés ici.
        myhref: 'http://www.images.google.com/',
        myhreftext: 'Boots Images',
        mytarget: '_blank',

        // [5] On peut ici renseigner les valeurs de inStok ou onSale, ou encore la valeur de inventory.
        inStock: true,
        onSale: true,
        inventory: "5",

        // [6] Dans le <li>, on boucle sur un tableau. Il sera donc renseigné ici.
        details: ['80% Bilelester', '20% Robinester', '45% Peau de Phoque synthétique'],

        // [4] l'objet styleObject contiendra donc 3 données, qui sont écrites presque comme du JS standard: mavariable.style.fontWeight = "bold";
        styleObject: {
            color: 'blue',
            fontSize: '18px',
            fontWeight: 'bold',
        },
        // [8] On souahite ici incrémenter la donnée cart de 1 quand on appuie sur le bouton "Ajouter au Panier" et retirer 1 si on appuie sur l'autre bouton. On initie donc le cart à 0.
        cart: 0,
    },
    // Puis on définie des fonctions, qui seront appelées dans le HTML si on clique sur les boutons.
    methods: {
        addToCart: function(){
            this.cart ++
        },
        removeFromCart: function() {
            if (this.cart > 0){
                this.cart --
            }
        },
        // [7] on crée ici une fonction qui assigne à la donnée "image", la valeur de la variante. Ainsi, dans la balise img, l'attribut v-bind:src="image" prendra parfois une valeur, parfois une autre.
        updateProduct: function(variantImage) {
            this.image = variantImage
        }
    }
});