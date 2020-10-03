<template>
  <div id="header">
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Escritor"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Procurar</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown text="Fonte" right>
            <b-dropdown-item href="#">Arial</b-dropdown-item>
            <b-dropdown-item href="#">Georgia</b-dropdown-item>
            <b-dropdown-item href="#">Roboto</b-dropdown-item>
            <b-dropdown-item href="#">Ubuntu</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Usuário</em>
            </template>
            <b-dropdown-item href="#">Entrar</b-dropdown-item>
            <b-dropdown-item href="#">Sair</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style lang="css">
#id {
   margin: 0 auto;
}
   
</style>