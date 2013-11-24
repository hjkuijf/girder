girder.models.CollectionModel = Backbone.Model.extend({

    fetch: function () {
        girder.restRequest({
            path: 'collection/' + this.get('_id'),
            error: null
        }).done(_.bind(function (resp) {
            this.set(resp);
            this.trigger('g:fetched');
        }, this)).error(_.bind(function () {
            this.trigger('g:error');
        }, this));
    }
});