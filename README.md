# App To-Do — Ionic + Angular

Este repositório contém o modelo/base utilizado no minicurso de Ionic com Angular a ser realizado na quinta-feira, 23 de outubro, das 13h às 17h. O projeto é um aplicativo simples de lista de tarefas (To-Do) que demonstra os conceitos fundamentais de criação de apps híbridos com Ionic, Angular e Capacitor, incluindo navegação, componentes visuais, serviços, persistência local e build para dispositivos.

## Sumário
- Descrição do projeto
- Tecnologias utilizadas
- Pré-requisitos
- Como executar (Web)
- Como executar em dispositivo/emulador (Mobile com Capacitor)
- Scripts úteis
- Estrutura do projeto (visão geral)
- Dicas e problemas comuns
- Licença

---

## Descrição do projeto
Um app To-Do onde é possível:
- Listar, criar e gerenciar tarefas.
- Persistir dados localmente no dispositivo/navegador usando o Ionic Storage.
- Praticar a arquitetura de serviços no Angular e o uso de componentes do Ionic.

Objetivo didático: servir como base para o minicurso, cobrindo setup do ambiente, execução local, e integração com Capacitor para empacotar e rodar em Android/iOS.

## Tecnologias utilizadas
- Angular 20
- Ionic Framework 8 (@ionic/angular)
- Capacitor 7 (@capacitor/core, @capacitor/app, @capacitor/haptics, @capacitor/keyboard, @capacitor/status-bar)
- Ionic Storage (@ionic/storage-angular) para persistência local
- RxJS, Zone.js e TypeScript 5
- Ferramentas de build/testes do Angular (Angular CLI, Karma, Jasmine) e ESLint

Referências de configuração:
- capacitor.config.ts — appId, appName e webDir
- angular.json — configurações de build/serve
- ionic.config.json — metadados do projeto Ionic
- package.json — scripts e dependências

## Pré-requisitos
- Node.js LTS (recomendado 18.x ou 20.x)
- npm (vem com o Node)
- Angular CLI e Ionic CLI (opcional, porém recomendável para desenvolvimento):
  - npm i -g @angular/cli
  - npm i -g @ionic/cli
- Para rodar em dispositivos/emuladores:
  - Android: Android Studio, SDKs e um dispositivo/emulador configurado
  - iOS (somente macOS): Xcode e um simulador/dispositivo configurado

## Como executar (Web)
1. Clone o repositório
   - git clone <https://github.com/P0l1c3na/app-to-do-minicurso>
   - cd app-to-do-minicurso
2. Instale as dependências
   - npm install
3. Execute o projeto em ambiente de desenvolvimento
   - npm start ou ionic serve
   - A aplicação ficará acessível tipicamente em http://localhost:4200
   - Alternativa (se você usa Ionic CLI): ionic serve

Build para produção (opcional):
- npm run build
- Os arquivos gerados ficam em dist/app-to-do-minicurso

## Como executar em dispositivo/emulador (Mobile com Capacitor)
Após realizar o build da aplicação web, sincronize com a plataforma desejada:

1. Build web
   - npm run build
2. Adicione a plataforma (uma vez por plataforma)
   - npx cap add android
   - npx cap add ios
3. Sincronize os arquivos web com o projeto nativo
   - npx cap sync
4. Abra o projeto nativo no IDE e execute
   - Android: npx cap open android (abre no Android Studio)
   - iOS (macOS): npx cap open ios (abre no Xcode)

Dicas:
- Em desenvolvimento, sempre que fizer novo build web (npm run build), execute npx cap copy ou npx cap sync antes de rodar novamente no dispositivo/emulador.
- Para testes rápidos de UI sem recursos nativos, prefira ionic serve/ng serve no navegador.

## Scripts úteis (package.json)
- start: ng serve (servidor de desenvolvimento)
- build: ng build (build de produção por padrão)
- watch: ng build --watch --configuration development
- test: ng test (Karma + Jasmine)
- lint: ng lint (ESLint)

## Estrutura do projeto (visão geral)
- src/app/pages/tarefas
  - tarefas.page.ts / tarefas.page.html — página principal de tarefas
- src/app/services
  - tarefas.service.ts — lógica de domínio para gerenciar tarefas
  - storage.service.ts — wrapper para @ionic/storage-angular (persistência local)
- src/index.html — documento base
- src/app/app.module.ts — módulo raiz do Angular/Ionic

## Dicas e problemas comuns
- Porta já em uso (4200): finalize o processo ocupando a porta ou use ng serve --port 4300
- Erros do Capacitor ao abrir o projeto nativo: rode npx cap sync e confira se o Android Studio/Xcode estão atualizados
- Permissões/SDK no Android: aceite as licenças e instale SDKs no Android Studio (SDK Manager)
- iOS (macOS): é necessário Xcode e uma conta de desenvolvimento para deploy em dispositivo físico

## Minicurso
Este repositório é o modelo do minicurso de Ionic com Angular realizado na quinta feira, dia 23 de outubro de 2025, das 13h às 17h.

## Licença
Uso educacional no contexto do minicurso. Ajuste conforme as políticas da sua organização.
