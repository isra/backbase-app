# Angular 7
I choose Angular 7 because is a great framework.
There are many reasons, TypeScript, Google, Reusability, Improved Readability, Ease of Maintenance, etc

# Run project
- npm install
- ng serve

# principal components
- app-dashboard
    This is the principal layout for container the other elements.
- app-list-payments:  Container the list of items and filters, this component knows all the logic for show information
- app-tranfer: For transfer, receives the list of merchants, (TOBE: this should be called of a service, the list of merchants). This component valid the restriction "A User shouldn't be able to transfer money beyond a balance of $ -500.00."


# Pipes
- dateMonthYear : For detail of dates in the list item
- formatNumbers : show two decimals

# Directives
- appNumbers : for the input value amount in the transaction

# Other components
- Spinner
- Alert

# Pluggin
- selectize : https://selectize.github.io/selectize.js/
    For make select of merchants
- JQuery: for Selectize

# Note
- Only two resolutions, mobile and ipad/desktop, this are a simple elements.

I hope have good luck.

Regards.
Isaac Salgado
isra.iiss@gmail.com

