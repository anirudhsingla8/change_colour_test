describe('BS', () => {
    it('Running test cases', () => {
        expect(true).to.equal(true)
    })
})

describe('Local', () => {
    it('page successfully loads', () => {
        cy.visit('/index.html')
    })
    it('button click colour change', () => {
        let box_id;
        let box_colour;
        let old_box;
        let flag = true;
        cy.get('#change_button').click().then(()=>{
            cy.get('#block_id').invoke('val').then(some_text =>{
                box_id=some_text
            })
            cy.get('#colour_id').invoke('val').then(some_text =>{
                box_colour=some_text
            })
            if(flag == true && parseFloat(box_id)>=1 && parseFloat(box_id)<=9){
                cy.get(`#${box_id}`).should('have.css','background-color',`${box_colour}`)
                old_box=box_id
                flag=false
            }else if(flag == false && parseFloat(box_id)>=1 && parseFloat(box_id)<=9){
                cy.get(`#${box_id}`).should('have.css','background-color',`${box_colour}`)
                cy.get(`#${old_box}`).should('have.css','background-color',`transparent`)
            }
        })

        cy.get('#change_button').click().then(()=>{
            cy.get('#block_id').invoke('val').then(some_text =>{
                box_id=some_text
            })
            cy.get('#colour_id').invoke('val').then(some_text =>{
                box_colour=some_text
            })
            if(flag == true && parseFloat(box_id)>=1 && parseFloat(box_id)<=9){
                cy.get(`#${box_id}`).should('have.css','background-color',`${box_colour}`)
                old_box=box_id
                flag=false
            }else if(flag == false && parseFloat(box_id)>=1 && parseFloat(box_id)<=9){
                cy.get(`#${box_id}`).should('have.css','background-color',`${box_colour}`)
                cy.get(`#${old_box}`).should('have.css','background-color',`transparent`)
            }
        })
    })
})