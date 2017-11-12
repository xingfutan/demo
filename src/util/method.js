let Money = [{lv:'vip3',fee:600},{lv:'vip2',fee:400},{lv:'vip1',fee:200}];
let vip = {};
let getVip = function(fee,start){
  for(let i=start;i< Money.length;i++){
    let num = Math.floor(fee / Money[i].fee);
    if(num>0){
      vip[Money[i].lv] = num;
      return getVip(fee % Money[i].fee, i+1);
    }
  }
};
