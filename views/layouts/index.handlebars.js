<div class="container">
    <div class="row">
    <div class ="col-xs-12 text-center" id="top-bar">
        <h1>Eat The Burger</h1>
    </div>
    <div class="col-xs-6 text-center" class="tasl">
    <div class="row">
    {{#each burger_data}}
    {{#unless this.eaten}}
    <div class="col-xs-9 text-center">
    <pre>{{this.id}}. {{this.burger_name}}</pre>
    </div>
    <div class="col-xs-3 text-center">
    <form method="POST" actions="/burgers/update?_method=PUT"
    class="button-size">
    <input type="hidden" name="burger_id" type="text"
    value={{this.id}}>
    <br>
    <button type="submit" class="btn btn-default">
    Eat this</button>
    </br>
    </input>
    </form>
    </div>
    </div>
    </div>
    </div>
</div>