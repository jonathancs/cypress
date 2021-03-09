describe('monitor lercado mivre', function () {
    it('first test', function () {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('https://www.mercadolivre.com.br/cadeira-de-escritorio-thunderx3-tgc12-gamer-ergonmica-black-con-estofado-do-couro-sintetico/p/MLB10535910?pdp_filters=category:MLB193945#searchVariation=MLB10535910&position=2&type=product&tracking_id=74a2020b-149b-48f2-a91b-11f781e9cddd')
        cy.wait(5 * 1000)
        cy.get('a[class="nav-logo"]')
        cy.get('#cookieDisclaimerButton').click()

        // try
        let obtainedText = cy.get('span[class="price-tag-fraction"]').invoke('text') // jquery method
        
        console.log(obtainedText)

        


        // try this

        cy
            .get('input[name="email"]')
            .invoke('text')  // for input or textarea, .invoke('val')
            .then(text => {
                const someText = text;
                cy.log(someText);
            });



    })
})