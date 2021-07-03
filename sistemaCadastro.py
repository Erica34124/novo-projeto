from datetime import datetime


dic=[]
lista =[]
listaAnuncio=[]
cliente = []
dataI =[]
dataF =[]
dias =[]
vistos =[]
invest =[]
clicks=[]
comps=[]
newViews =[]
totInvestPessoa =[]
totViews =[]
l = 0

while True:
    a=str(input('Digite nome do anuncio: '))
    listaAnuncio.append(a)
    
    c=str(input('Digite seu nome: '))
    cliente.append(c)
     
    datainicio =input('Digite data Inicio neste formato: [d/m/Y]: ')
    dataI=(datetime.strptime(datainicio,  "%d/%m/%Y"))
   
    datafinal =input('Digite data final neste formato: [d/m/Y]: ')  
    dataF=(datetime.strptime(datafinal, "%d/%m/%Y"))
     
    i= float(input('Digite valor do investimento: R$  '))
    invest.append(i)

    dia =  dataF-dataI
    dias.append(dia.days)
    print('Total de dias de investimento: ',dia.days)
    
    totalInvestP =dia.days * i
    totInvestPessoa.append(totalInvestP)
    
    visto =totalInvestP*30
    vistos.append(visto)
    
    
    click =visto *(0.12)
    clicks.append(click)
   
    
    comp = click *(0.15)
    comps.append(comp)
    
    
    newView = comp*40
    newViews.append(newView)
    
    

    totView=newView+visto
    totViews.append(totView)

    
    
    lista.append(dic.copy())
    r = str(input('Quer continuar? [S/N]'))
    if r in "Nn":
        break
dic.append(listaAnuncio)
dic.append(cliente)
dic.append(dataI)
dic.append(dataF)
dic.append(dias)
dic.append(vistos)
dic.append(invest)
dic.append(comps)
dic.append(newViews)
dic.append(totInvestPessoa)
dic.append(totViews)
 
   
    
total=(newViews + vistos)
soma = sum(invest)
media= soma/len(lista)
print("="*60)
print('\n')
print(f' {"Resumo de transações:":^50} ')
print('\n')
print("="*60)
print('\n')
print(f' foram cadastrados {len(listaAnuncio)} anuncios \n')
print("-"*60)
print('\n')
print(f' Valor total de investimento: {soma}')
print("-"*60)
print('\n')
print(f' Clientes cadastrados: {cliente}');
print("-"*60)
print('\n')
print('total investido referente aos dias', totInvestPessoa)
print("-"*60)
print('\n')
print("Total de pessoas que visualizaram o anuncio ",vistos)
print("-"*60)
print('\n')
print("Total de pessoas que clicaram: ", clicks)
print("-"*60)
print('\n')
print("Total de pessoas que compartilharam o anuncio: ", comps)
print("-"*60)
print('\n')
print("Novas visualizações: ", newViews)
print("-"*60)
print('\n')
print("Total de visualização (inicial e compatilhamentos)", total)
print("-"*60)
print('\n')
print("-"*60)
print('Visualização do cadastro:{}'.format(dic))
print("-"*60) ;      