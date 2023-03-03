//React
import React, {useState} from "react";

//Composant
import { Modal } from '../components/Modal';

//images
import error from './assets/icons/errorLogo.svg';
import warning from './assets/icons/warningLogo.svg';
import informative from './assets/icons/informativeLogo.svg';
import success from './assets/icons/successLogo.svg';
import custom from './assets/icons/rockOn.svg';


export default {

    title: 'Modal',
    
    component: Modal,

    argTypes: {

        isOpen: {
          description: "Determines the initial status of the display and allows to simulate the opening and closing of the modal.",
          table: {category: 'Event'},
        },

        isScrollable: {
          description: "Allows you to define if the content can be scrolled or not when the modal is open.",
          table: {category: 'Event'},
        },

        type: {
          description: "The modal has four predefined display types. The type parameter allows you to choose between them.",
          table: {category: 'Format'},
          options: ['warning', 'error', 'informative', 'success'],
          control: { type: 'select' },
        },

        iconToDisplay: {
          description: "The user can pass his own icon in props in order to display it on the modal. If no icon is passed in parameter and the modal uses a predefined type then a default icon will be displayed.",
          table: {category: "Content"},
          control: { type: 'select' },
          options: [null, error, warning, informative, success, custom]

        },
        
        title: {
          description: "Title to be displayed on the modal.",
          table: {category: "Content"},
          control: "text"
        }, 

        message: {
          description: "Message to be displayed when the modal appears.",
          table: {category: "Content"},
          control: "text"
        }
      },
};

//Templates
const StaticModalTemplate = (args) => {

  const disableEvent = () => {alert('The closing events are disabled for this story. You can simulate them with the "isOpen" control in the storybook control panel.')}

  return <Modal setIsOpen={disableEvent} {...args}/>
}

const DynamicModalTemplate = (args) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <section>

      <button onClick={() => setIsOpen(true)}>Display modal</button>

      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} {...args} />}

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis sagittis sapien in rutrum. Nulla iaculis semper lectus in aliquam. 
        Nulla luctus dui a urna auctor, ut blandit nulla faucibus. Sed turpis dui, ullamcorper ut sem sed, placerat pellentesque quam. Nullam pulvinar 
        nunc vel sodales consectetur. Morbi odio diam, fringilla sit amet purus elementum, pretium efficitur magna. Suspendisse feugiat aliquam orci, 
        sed ullamcorper purus aliquam id. Nullam imperdiet metus a enim tristique fermentum. Vestibulum lorem nisi, fringilla vitae sagittis id, suscipit 
        ut purus. Duis felis ante, congue id diam ut, bibendum vulputate massa. Quisque faucibus efficitur enim, sagittis ultrices massa efficitur vestibulum. 
        Proin pretium malesuada ante, non bibendum arcu tempus at. Donec et odio nec magna auctor faucibus. Ut pellentesque nisi et nisi tempus, in fermentum erat 
        semper. Cras tempor ex sit amet sem mattis, at porta lorem laoreet.
      </p>

      <p>
        Curabitur mauris magna, consectetur non pulvinar vel, sagittis ut sem. Etiam fermentum semper eleifend. Nulla aliquam ut ante non molestie. Orci varius natoque 
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed non orci vel metus pulvinar gravida. Cras turpis mi, convallis id lectus vitae, eleifend commodo 
        lorem. Praesent molestie sodales quam, quis auctor mi varius eu. Etiam erat tellus, placerat et erat et, faucibus malesuada purus. Interdum et malesuada fames ac ante ipsum 
        primis in faucibus. In pulvinar faucibus scelerisque. Quisque aliquet rutrum lectus eget ultricies. Vestibulum posuere eleifend diam, vel cursus odio tincidunt nec. Donec arcu neque, 
        bibendum et tempor sed, ultricies ut ligula. Fusce ullamcorper justo nec elementum sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>

      <p>
        Curabitur mauris magna, consectetur non pulvinar vel, sagittis ut sem. Etiam fermentum semper eleifend. Nulla aliquam ut ante non molestie. Orci varius natoque 
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed non orci vel metus pulvinar gravida. Cras turpis mi, convallis id lectus vitae, eleifend commodo 
        lorem. Praesent molestie sodales quam, quis auctor mi varius eu. Etiam erat tellus, placerat et erat et, faucibus malesuada purus. Interdum et malesuada fames ac ante ipsum 
        primis in faucibus. In pulvinar faucibus scelerisque. Quisque aliquet rutrum lectus eget ultricies. Vestibulum posuere eleifend diam, vel cursus odio tincidunt nec. Donec arcu neque, 
        bibendum et tempor sed, ultricies ut ligula. Fusce ullamcorper justo nec elementum sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>

      <p>
        Curabitur mauris magna, consectetur non pulvinar vel, sagittis ut sem. Etiam fermentum semper eleifend. Nulla aliquam ut ante non molestie. Orci varius natoque 
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed non orci vel metus pulvinar gravida. Cras turpis mi, convallis id lectus vitae, eleifend commodo 
        lorem. Praesent molestie sodales quam, quis auctor mi varius eu. Etiam erat tellus, placerat et erat et, faucibus malesuada purus. Interdum et malesuada fames ac ante ipsum 
        primis in faucibus. In pulvinar faucibus scelerisque. Quisque aliquet rutrum lectus eget ultricies. Vestibulum posuere eleifend diam, vel cursus odio tincidunt nec. Donec arcu neque, 
        bibendum et tempor sed, ultricies ut ligula. Fusce ullamcorper justo nec elementum sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>

      <p>
        Curabitur mauris magna, consectetur non pulvinar vel, sagittis ut sem. Etiam fermentum semper eleifend. Nulla aliquam ut ante non molestie. Orci varius natoque 
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed non orci vel metus pulvinar gravida. Cras turpis mi, convallis id lectus vitae, eleifend commodo 
        lorem. Praesent molestie sodales quam, quis auctor mi varius eu. Etiam erat tellus, placerat et erat et, faucibus malesuada purus. Interdum et malesuada fames ac ante ipsum 
        primis in faucibus. In pulvinar faucibus scelerisque. Quisque aliquet rutrum lectus eget ultricies. Vestibulum posuere eleifend diam, vel cursus odio tincidunt nec. Donec arcu neque, 
        bibendum et tempor sed, ultricies ut ligula. Fusce ullamcorper justo nec elementum sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>

      <p>
        Curabitur mauris magna, consectetur non pulvinar vel, sagittis ut sem. Etiam fermentum semper eleifend. Nulla aliquam ut ante non molestie. Orci varius natoque 
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed non orci vel metus pulvinar gravida. Cras turpis mi, convallis id lectus vitae, eleifend commodo 
        lorem. Praesent molestie sodales quam, quis auctor mi varius eu. Etiam erat tellus, placerat et erat et, faucibus malesuada purus. Interdum et malesuada fames ac ante ipsum 
        primis in faucibus. In pulvinar faucibus scelerisque. Quisque aliquet rutrum lectus eget ultricies. Vestibulum posuere eleifend diam, vel cursus odio tincidunt nec. Donec arcu neque, 
        bibendum et tempor sed, ultricies ut ligula. Fusce ullamcorper justo nec elementum sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis sagittis sapien in rutrum. Nulla iaculis semper lectus in aliquam. 
        Nulla luctus dui a urna auctor, ut blandit nulla faucibus. Sed turpis dui, ullamcorper ut sem sed, placerat pellentesque quam. Nullam pulvinar 
        nunc vel sodales consectetur. Morbi odio diam, fringilla sit amet purus elementum, pretium efficitur magna. Suspendisse feugiat aliquam orci, 
        sed ullamcorper purus aliquam id. Nullam imperdiet metus a enim tristique fermentum. Vestibulum lorem nisi, fringilla vitae sagittis id, suscipit 
        ut purus. Duis felis ante, congue id diam ut, bibendum vulputate massa. Quisque faucibus efficitur enim, sagittis ultrices massa efficitur vestibulum. 
        Proin pretium malesuada ante, non bibendum arcu tempus at. Donec et odio nec magna auctor faucibus. Ut pellentesque nisi et nisi tempus, in fermentum erat 
        semper. Cras tempor ex sit amet sem mattis, at porta lorem laoreet.
      </p>

      <p>
        Curabitur mauris magna, consectetur non pulvinar vel, sagittis ut sem. Etiam fermentum semper eleifend. Nulla aliquam ut ante non molestie. Orci varius natoque 
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed non orci vel metus pulvinar gravida. Cras turpis mi, convallis id lectus vitae, eleifend commodo 
        lorem. Praesent molestie sodales quam, quis auctor mi varius eu. Etiam erat tellus, placerat et erat et, faucibus malesuada purus. Interdum et malesuada fames ac ante ipsum 
        primis in faucibus. In pulvinar faucibus scelerisque. Quisque aliquet rutrum lectus eget ultricies. Vestibulum posuere eleifend diam, vel cursus odio tincidunt nec. Donec arcu neque, 
        bibendum et tempor sed, ultricies ut ligula. Fusce ullamcorper justo nec elementum sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>

      <p>
        Curabitur mauris magna, consectetur non pulvinar vel, sagittis ut sem. Etiam fermentum semper eleifend. Nulla aliquam ut ante non molestie. Orci varius natoque 
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed non orci vel metus pulvinar gravida. Cras turpis mi, convallis id lectus vitae, eleifend commodo 
        lorem. Praesent molestie sodales quam, quis auctor mi varius eu. Etiam erat tellus, placerat et erat et, faucibus malesuada purus. Interdum et malesuada fames ac ante ipsum 
        primis in faucibus. In pulvinar faucibus scelerisque. Quisque aliquet rutrum lectus eget ultricies. Vestibulum posuere eleifend diam, vel cursus odio tincidunt nec. Donec arcu neque, 
        bibendum et tempor sed, ultricies ut ligula. Fusce ullamcorper justo nec elementum sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>

      <p>
        Curabitur mauris magna, consectetur non pulvinar vel, sagittis ut sem. Etiam fermentum semper eleifend. Nulla aliquam ut ante non molestie. Orci varius natoque 
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed non orci vel metus pulvinar gravida. Cras turpis mi, convallis id lectus vitae, eleifend commodo 
        lorem. Praesent molestie sodales quam, quis auctor mi varius eu. Etiam erat tellus, placerat et erat et, faucibus malesuada purus. Interdum et malesuada fames ac ante ipsum 
        primis in faucibus. In pulvinar faucibus scelerisque. Quisque aliquet rutrum lectus eget ultricies. Vestibulum posuere eleifend diam, vel cursus odio tincidunt nec. Donec arcu neque, 
        bibendum et tempor sed, ultricies ut ligula. Fusce ullamcorper justo nec elementum sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>

      <p>
        Curabitur mauris magna, consectetur non pulvinar vel, sagittis ut sem. Etiam fermentum semper eleifend. Nulla aliquam ut ante non molestie. Orci varius natoque 
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed non orci vel metus pulvinar gravida. Cras turpis mi, convallis id lectus vitae, eleifend commodo 
        lorem. Praesent molestie sodales quam, quis auctor mi varius eu. Etiam erat tellus, placerat et erat et, faucibus malesuada purus. Interdum et malesuada fames ac ante ipsum 
        primis in faucibus. In pulvinar faucibus scelerisque. Quisque aliquet rutrum lectus eget ultricies. Vestibulum posuere eleifend diam, vel cursus odio tincidunt nec. Donec arcu neque, 
        bibendum et tempor sed, ultricies ut ligula. Fusce ullamcorper justo nec elementum sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>

      <p>
        Curabitur mauris magna, consectetur non pulvinar vel, sagittis ut sem. Etiam fermentum semper eleifend. Nulla aliquam ut ante non molestie. Orci varius natoque 
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed non orci vel metus pulvinar gravida. Cras turpis mi, convallis id lectus vitae, eleifend commodo 
        lorem. Praesent molestie sodales quam, quis auctor mi varius eu. Etiam erat tellus, placerat et erat et, faucibus malesuada purus. Interdum et malesuada fames ac ante ipsum 
        primis in faucibus. In pulvinar faucibus scelerisque. Quisque aliquet rutrum lectus eget ultricies. Vestibulum posuere eleifend diam, vel cursus odio tincidunt nec. Donec arcu neque, 
        bibendum et tempor sed, ultricies ut ligula. Fusce ullamcorper justo nec elementum sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis sagittis sapien in rutrum. Nulla iaculis semper lectus in aliquam. 
        Nulla luctus dui a urna auctor, ut blandit nulla faucibus. Sed turpis dui, ullamcorper ut sem sed, placerat pellentesque quam. Nullam pulvinar 
        nunc vel sodales consectetur. Morbi odio diam, fringilla sit amet purus elementum, pretium efficitur magna. Suspendisse feugiat aliquam orci, 
        sed ullamcorper purus aliquam id. Nullam imperdiet metus a enim tristique fermentum. Vestibulum lorem nisi, fringilla vitae sagittis id, suscipit 
        ut purus. Duis felis ante, congue id diam ut, bibendum vulputate massa. Quisque faucibus efficitur enim, sagittis ultrices massa efficitur vestibulum. 
        Proin pretium malesuada ante, non bibendum arcu tempus at. Donec et odio nec magna auctor faucibus. Ut pellentesque nisi et nisi tempus, in fermentum erat 
        semper. Cras tempor ex sit amet sem mattis, at porta lorem laoreet.
      </p>

      <p>
        Curabitur mauris magna, consectetur non pulvinar vel, sagittis ut sem. Etiam fermentum semper eleifend. Nulla aliquam ut ante non molestie. Orci varius natoque 
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed non orci vel metus pulvinar gravida. Cras turpis mi, convallis id lectus vitae, eleifend commodo 
        lorem. Praesent molestie sodales quam, quis auctor mi varius eu. Etiam erat tellus, placerat et erat et, faucibus malesuada purus. Interdum et malesuada fames ac ante ipsum 
        primis in faucibus. In pulvinar faucibus scelerisque. Quisque aliquet rutrum lectus eget ultricies. Vestibulum posuere eleifend diam, vel cursus odio tincidunt nec. Donec arcu neque, 
        bibendum et tempor sed, ultricies ut ligula. Fusce ullamcorper justo nec elementum sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>

      <p>
        Curabitur mauris magna, consectetur non pulvinar vel, sagittis ut sem. Etiam fermentum semper eleifend. Nulla aliquam ut ante non molestie. Orci varius natoque 
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed non orci vel metus pulvinar gravida. Cras turpis mi, convallis id lectus vitae, eleifend commodo 
        lorem. Praesent molestie sodales quam, quis auctor mi varius eu. Etiam erat tellus, placerat et erat et, faucibus malesuada purus. Interdum et malesuada fames ac ante ipsum 
        primis in faucibus. In pulvinar faucibus scelerisque. Quisque aliquet rutrum lectus eget ultricies. Vestibulum posuere eleifend diam, vel cursus odio tincidunt nec. Donec arcu neque, 
        bibendum et tempor sed, ultricies ut ligula. Fusce ullamcorper justo nec elementum sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>

      <p>
        Curabitur mauris magna, consectetur non pulvinar vel, sagittis ut sem. Etiam fermentum semper eleifend. Nulla aliquam ut ante non molestie. Orci varius natoque 
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed non orci vel metus pulvinar gravida. Cras turpis mi, convallis id lectus vitae, eleifend commodo 
        lorem. Praesent molestie sodales quam, quis auctor mi varius eu. Etiam erat tellus, placerat et erat et, faucibus malesuada purus. Interdum et malesuada fames ac ante ipsum 
        primis in faucibus. In pulvinar faucibus scelerisque. Quisque aliquet rutrum lectus eget ultricies. Vestibulum posuere eleifend diam, vel cursus odio tincidunt nec. Donec arcu neque, 
        bibendum et tempor sed, ultricies ut ligula. Fusce ullamcorper justo nec elementum sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>

      <p>
        Curabitur mauris magna, consectetur non pulvinar vel, sagittis ut sem. Etiam fermentum semper eleifend. Nulla aliquam ut ante non molestie. Orci varius natoque 
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed non orci vel metus pulvinar gravida. Cras turpis mi, convallis id lectus vitae, eleifend commodo 
        lorem. Praesent molestie sodales quam, quis auctor mi varius eu. Etiam erat tellus, placerat et erat et, faucibus malesuada purus. Interdum et malesuada fames ac ante ipsum 
        primis in faucibus. In pulvinar faucibus scelerisque. Quisque aliquet rutrum lectus eget ultricies. Vestibulum posuere eleifend diam, vel cursus odio tincidunt nec. Donec arcu neque, 
        bibendum et tempor sed, ultricies ut ligula. Fusce ullamcorper justo nec elementum sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>

      <p>
        Curabitur mauris magna, consectetur non pulvinar vel, sagittis ut sem. Etiam fermentum semper eleifend. Nulla aliquam ut ante non molestie. Orci varius natoque 
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed non orci vel metus pulvinar gravida. Cras turpis mi, convallis id lectus vitae, eleifend commodo 
        lorem. Praesent molestie sodales quam, quis auctor mi varius eu. Etiam erat tellus, placerat et erat et, faucibus malesuada purus. Interdum et malesuada fames ac ante ipsum 
        primis in faucibus. In pulvinar faucibus scelerisque. Quisque aliquet rutrum lectus eget ultricies. Vestibulum posuere eleifend diam, vel cursus odio tincidunt nec. Donec arcu neque, 
        bibendum et tempor sed, ultricies ut ligula. Fusce ullamcorper justo nec elementum sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
    </section>
  )
}



//Stories
export const DemoModalCustomization = StaticModalTemplate.bind({});
DemoModalCustomization.args = {
    isScrollable: true,
    isOpen: true,
    type: "success",
    iconToDisplay: null, 
    title: "The employee has been successfully added", 
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus ultricies tincidunt. Nam nisl mi, venenatis ut nulla non, vulputate blandit dui. Nulla sit amet commodo dui. Etiam dapibus mi."
};
DemoModalCustomization.storyName = 'Customization';


export const DemoModalDisplay = DynamicModalTemplate.bind({});
DemoModalDisplay.args = {
    isScrollable: false,
    type: "informative",
    iconToDisplay: null, 
    title: "Vous venez d'afficher la modale ! ", 
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus ultricies tincidunt. Nam nisl mi, venenatis ut nulla non, vulputate blandit dui. Nulla sit amet commodo dui. Etiam dapibus mi."
};
DemoModalDisplay.storyName = 'Affichage Dynamique';



















/*
const MyTemplateNaame = (args) => 
{
  const [isOpen, setIsOpen] = useState(true);

  return <Modal isOpen={isOpen} setIsOpen={setIsOpen} type="warning" iconToDisplay={null} title="Bob" message="Mon message trop bien !"/>
 // return <Modal {...args} />
}

export const MyStoryToDisplay = MyTemplateNaame.bind({});*/
