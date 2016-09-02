/**
 * Created by pms on 2016. 9. 2..
 */
function CalendarDate(title, nth, half){
    this.title = title;
    this.nth = nth;
    this.half = half;
    this.date = '';
    this.location = '';
}

CalendarDate.prototype = {
    setDate : function(isDrag, raw_endnth){
        var nth = parseInt(this.nth, 10),
            endnth = parseInt(raw_endnth, 10) || undefined;
        var remainder = nth % 12,
            remainder_end = endnth % 12,
            share = (nth - remainder) /12;


        if(remainder === 0 ){
            remainder = 12;
        }

        if(remainder_end === 0){
            remainder = 12;
        }

        if(share > 0){
            this.date = '오후 '
        }else {
            this.date = '오전 '
        }

        if(!isDrag){
            if (this.half) {
                this.date += remainder +' 30분' + '~' + remainder + 1 + ' 30분';
            } else {
                this.date += remainder + '~' + remainder + 1;
            }
        } else {
            if(this.half){
                this.date += remainder + ' 30분' + '~' + remainder_end + ' 30분';
            } else {
                this.date += remainder + '~' + remainder_end;
            }
        }


    },

    makeDOM : function(){
        return '<div class="calendar-data-box chip">' +
            '<dl>' +
            '<dt>' +
            '<span>' + this.date + '</span>'+
            '</dt>'+
            '<dd>' + this.title + '</dd>'+
            '</dl>'+
            '</div>'
    },
    setLocation: function(topvalue){
        this.location = topvalue;
    }

};