import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  backgroundImages =[
    {
      id:1,
      image:'../../assets/slides/slide1.jpg',
      logo: '../../assets/logos/logo-01.png',
      title: '',
      messages: 'Etudier en mobilité'
    },
    {
      id:2,
      image:'../../assets/slides/slide2.jpg',
      title: 'Disponible en hors connexion',
      logo: '',
      // eslint-disable-next-line max-len
      messages: 'Tout le contenu peut être téléchargé sur votre téléphone mobile, de sorte qu\'il soit accessible même sans connexion internet.'
    },
    {
      id:3,
      image:'../../assets/slides/slide3.jpg',
      title: 'Pratiquez ce qui est appris',
      logo: '',
      // eslint-disable-next-line max-len
      messages: 'Les apprenants vérifient leur apprentissage grâce à des évolutions sous forme de questionnaires autocorrectifs et des centaines d\' épreuves corrigées.',
    },
    {
      id:4,
      image:'../../assets/slides/slide4.jpg',
      logo: '',
      title: 'Analyse approfondie',
      messages: 'La progression des apprenants estassurée par des statistiqyes détaillées et des rapports d\'avancement automatisés'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
