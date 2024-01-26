describe('QA Task', () => {
  it('Open softwaretestingboard Web Site', () => {

  //cy.clearCurrentSessionData()
  //cy.clearSessionData()
  //cy.clearCookies()

  cy.visit('https://magento.softwaretestingboard.com/')

    cy.contains('Radiant Tee')
    cy.contains('Radiant Tee').click()
    cy.url().should('include', 'radiant-tee.html')

         cy.wait(2000) // wait for 2 seconds
        cy.contains('Add to Cart').click()

//Click on Sign In
            cy.contains('Sign In')
            cy.contains('Sign In').click()
            cy.url().should('include', 'customer/account/login')

 //   cy.get("//*[@id='email']").click()
   // cy.get('input').should('have.title', 'Email').type('baranigor2008@email.ru')

   // cy.get('input').eq(2).type('baranigor2008@email.ru')
        cy.get('input[id=email]').type('baranigor2009@mail.ru');
      // Delay each keypress by 0.1 sec
   //   .type('baranigor2008@email.ru', { delay: 100 })
    //  .should('have.value', 'baranigor2008@email.ru')
    cy.wait(1000) // wait for 1 seconds
        cy.get('input[name=login\\[password\\]]').type('IgrIk587!');
        cy.wait(1000) // wait for 1 seconds

//Click Sign In button
        cy.get('button[id=send2]').eq(0).click({ force: true })
        cy.wait(5000) // wait for 5 seconds

        cy.get('div[id=option-label-size-143-item-167]').parent().click()
         cy.wait(1000) // wait for 1 seconds
        cy.get('div[id=option-label-color-93-item-56').click()
    cy.contains('Add to Cart')
    cy.contains('Add to Cart').click()

   // cy.get('span[span=items').click()
   // cy.get('a[class=action showcart]').click()
    cy.wait(3000) // wait for 3 seconds
    cy.get('button[id=top-cart-btn-checkout]').click({force: true})

    cy.wait(10000) // wait for 10 seconds
    // Enter Street Address
    cy.get('input[name=street\\[0\\]]').type('Stefan Cel Mare 11111')

    // Enter City
    cy.get('input[name=city]').type('Chisinau')

    // Eneter Zip Postal code
    cy.get('input[name=postcode]').type('20688')
 cy.wait(3000) // wait for 3 seconds

    // Select Alabama
   // cy.get('select[name=region_id]').click({ multiple: true }).type('{enter}').type('{downArrow}')
   cy.get('select[name=region_id]').select('Alabama')

   cy.wait(3000) // wait for 3 seconds

        // Enter Zip Postal Code
      //  cy.get('input[name=postcode]').type('Chisinau')

        // Select Country
        cy.get('select[name=country_id]').type('{downArrow}')

    cy.wait(3000) // wait for 3 seconds

        // Enter Phone Number
        cy.get('input[name=telephone]').type('079121586')

        // Select Shipping method
        cy.get('[type="radio"]').first().check()

 cy.wait(3000) // wait for 3 seconds

        //Click on Next button
       // cy.get('button[type=submit]').click({ multiple: true })
       // cy.get('button[data-role=opc-continue]').click({multiple: true})
          // cy.get('span[data-bind=i18n: \'Next\']').click()
        cy.contains('Next').click()

        //Click on Place Order button
        cy.get('button[type=submit]').click()

    //cy.xpath('(//*[text()[contains(.,'My Cart')]])[1]')
//lick on Submit button
  //          cy.contains('Sign In')
//           cy.contains('Sign In').click()
            cy.wait(1000) // wait for 10 seconds
})

    //Click on Add to Cart
    //cy.get('.//*[@id="product-addtocart-button"]').type('fake@email.com')
  //    it('Click Add to Cart button ', () => {
  //  cy.wait(2000) // wait for 2 seconds
 //   cy.contains('Add to Cart').click()
   // cy.wait("[id='product-addtocart-button']")
    //cy.get("[id='product-addtocart-button']").click()
    //cy.get('@product-addtocart-button').click()

//  })
})