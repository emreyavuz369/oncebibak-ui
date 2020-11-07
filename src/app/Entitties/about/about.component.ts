import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  header = '"Öncebibak Sonra Al" sloganıyla hayata geçirdiğimiz projemizde;';
  text = 'senin hayatında artık büyük bir yeri olan alışverişi daha kolay hale getirmeye çalışıyoruz. Gerçekten de\n' +
    '      günümüzde, bir ürünü elimizle kurcalamadan gözümüzle\n' +
    '      görmeden önce bizi ne gibi sorunlarla karşı karşıya bırakacağını bilmiyoruz. Hatta kullanmaya başladıktan sonra\n' +
    '      bile ürünün problemleri hakkında bir fikrimiz oluşmuyor. İşte tam da bundan\n' +
    '      dolayı bizler böyle bir hizmetin yokluğunun boşluğunu gördük ve dev e-ticaret sitelerinde yer alan ürünler\n' +
    '      hakkındaki olumlu ve olumsuz yorumları görmene yardım ediyoruz. Geliştirdiğimiz sistemle\n' +
    '      seni ilgilendirmeyecek yorumları da filtreleyerek önüne çıkarmıyoruz. Senin yapman gereken tek şey almak istediğin\n' +
    '      ürünün marka ve modelini arama barına yazmak oluyor. Sistemimizin nasıl\n' +
    '      çalıştığını öğrenmek istiyorsan aşağıdaki butona tıklayarak bunu öğrenebilirsin.';

  constructor() {
  }

  ngOnInit(): void {
  }

}
