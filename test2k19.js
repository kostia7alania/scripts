const zayavitel = 'Индивидуальный предприниматель'

// Категория заявителя
iim(`TAG POS=1 TYPE=LABEL FORM=ID:form_element ATTR=TXT:${zayavitel.replace(/ /gim,'<SP>')}`)



function iim (e) {return iimPlayCode(e)}
