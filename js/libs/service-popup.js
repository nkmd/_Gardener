jQuery(function($){

    if($('.venobox_service_popup').length) {
        $('.venobox_service_popup').venobox({
            framewidth:"800px",
            frameheight:"1050px",
            spinner: "no"
        });
    }

    $('.service_show_details').on('click', function () {

        //console.log('clock');
        var loading = false;
        var post_id = $(this).data('id');

       // console.log(post_id);

        if (!loading) {
            loading = true;
            var data = {
                action: 'ale_ajax_service_popup',
                nonce: aleservicepopup.nonce,
                post: post_id
            };
            $.post(aleservicepopup.url, data, function (res) {
                //console.log(res);
                if (res.success) {
                    var $content = $(res.data);

                    $('.vbox-inline').html($content);

                    //console.log('1');
                    loading = false;
                } else {
                     //console.log('2');
                }
            }).fail(function (xhr, textStatus, e) {
                 console.log(xhr.responseText);
            });
        }
    });

});