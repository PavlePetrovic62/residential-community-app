import React, { useState } from "react";

const InfoContext = React.createContext({
  informations: [],
  selectedId: "",
  idIsSelected: false,
  urlExists: false,
  showSinglePage: false,
  giveId: () => {},
  getUrl: () => {},
});

export const InfoContextProvider = (props) => {
  const [selectedInfoId, setSelectedInfoId] = useState();
  const [infoUrl, setInfoUrl] = useState();

  const idIsSelected = !!selectedInfoId;
  const urlExists = !!infoUrl;
  const shouldShowSinglePage = urlExists || idIsSelected;

  const idHandler = (id) => {
    setSelectedInfoId(id);
  };

  const getUrl = (params) => {
    setInfoUrl(params);
  };

  const contextValue = {
    informations: [
      {
        id: "i1",
        date: "27.10.2021.",
        title: "Кишовит дан",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at odio sed nulla rhoncus malesuada. Pellentesque metus quam, convallis eget massa eget, lobortis congue velit. Nunc ultrices vehicula interdum. Donec sit amet egestas metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium mollis suscipit. Aliquam rutrum blandit lacus. Morbi justo augue, dignissim eget consectetur et, volutpat quis dui. Fusce vehicula imperdiet rutrum. Donec iaculis magna risus, in aliquam leo ornare quis. Phasellus vel convallis felis. Aenean nec semper ipsum, quis luctus neque. Duis fringilla viverra odio, et viverra ligula venenatis eu. Maecenas molestie nulla a turpis tempus, vitae dictum ante suscipit. Pellentesque a felis ex. Pellentesque eleifend commodo magna. Nullam fringilla sit amet orci ut condimentum. Donec eget nulla sodales, consequat risus tempus, ultricies quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas pretium, ligula a ultricies consequat, sapien massa malesuada leo, eu consectetur ipsum ex eget ipsum. Suspendisse luctus vitae purus ac fringilla. Vestibulum imperdiet lectus nulla, sit amet egestas diam ullamcorper ut. Donec id massa est. Proin nec eros euismod, ultrices lectus ac, tincidunt ante. Nam consequat purus dapibus arcu aliquet elementum. Aenean nec ex in purus tempor dignissim. Sed auctor, odio quis facilisis vehicula, mauris quam dignissim libero, condimentum suscipit sapien turpis eget metus. Integer nec purus mi. Ut nec nibh eu lacus faucibus maximus. Vivamus imperdiet convallis eros, ut congue lorem porta tincidunt. Aenean tincidunt fringilla semper. Quisque pulvinar, turpis rutrum gravida lacinia, eros orci egestas libero, at luctus ligula nunc eu justo. Aliquam erat volutpat. Donec ac ante lorem. Nullam at erat risus. Maecenas dictum justo ac sem venenatis mollis. Vivamus vel euismod turpis, id vestibulum neque. In hac habitasse platea dictumst. Sed rutrum orci vitae metus suscipit efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce suscipit lectus sed turpis molestie euismod. Vestibulum urna nulla, fringilla et malesuada vitae, congue quis felis. Suspendisse sodales facilisis turpis eu egestas. Quisque id libero sed orci faucibus laoreet sit amet finibus sem. Ut lobortis, libero eget pharetra gravida, elit elit commodo massa, ut ornare lorem quam ac nisl. Cras dictum porttitor pulvinar. Etiam malesuada, augue vel tristique rutrum, orci odio dapibus arcu, imperdiet commodo diam sem vel neque. Curabitur semper magna ut venenatis facilisis. Nunc aliquet augue orci, id sollicitudin arcu luctus vitae. Vivamus in erat mauris. Donec non luctus turpis, vulputate finibus enim. Aenean turpis augue, faucibus non orci nec, pellentesque tincidunt augue. Fusce maximus eu mi non gravida.",
      },
      {
        id: "i2",
        date: "03.04.2022.",
        title: "Сакупљање новца за поправку крова",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at odio sed nulla rhoncus malesuada. Pellentesque metus quam, convallis eget massa eget, lobortis congue velit. Nunc ultrices vehicula interdum. Donec sit amet egestas metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium mollis suscipit. Aliquam rutrum blandit lacus. Morbi justo augue, dignissim eget consectetur et, volutpat quis dui. Fusce vehicula imperdiet rutrum. Donec iaculis magna risus, in aliquam leo ornare quis. Phasellus vel convallis felis. Aenean nec semper ipsum, quis luctus neque. Duis fringilla viverra odio, et viverra ligula venenatis eu. Maecenas molestie nulla a turpis tempus, vitae dictum ante suscipit. Pellentesque a felis ex. Pellentesque eleifend commodo magna. Nullam fringilla sit amet orci ut condimentum. Donec eget nulla sodales, consequat risus tempus, ultricies quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas pretium, ligula a ultricies consequat, sapien massa malesuada leo, eu consectetur ipsum ex eget ipsum. Suspendisse luctus vitae purus ac fringilla. Vestibulum imperdiet lectus nulla, sit amet egestas diam ullamcorper ut. Donec id massa est. Proin nec eros euismod, ultrices lectus ac, tincidunt ante. Nam consequat purus dapibus arcu aliquet elementum. Aenean nec ex in purus tempor dignissim. Sed auctor, odio quis facilisis vehicula, mauris quam dignissim libero, condimentum suscipit sapien turpis eget metus. Integer nec purus mi. Ut nec nibh eu lacus faucibus maximus. Vivamus imperdiet convallis eros, ut congue lorem porta tincidunt. Aenean tincidunt fringilla semper. Quisque pulvinar, turpis rutrum gravida lacinia, eros orci egestas libero, at luctus ligula nunc eu justo. Aliquam erat volutpat. Donec ac ante lorem. Nullam at erat risus. Maecenas dictum justo ac sem venenatis mollis. Vivamus vel euismod turpis, id vestibulum neque. In hac habitasse platea dictumst. Sed rutrum orci vitae metus suscipit efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce suscipit lectus sed turpis molestie euismod. Vestibulum urna nulla, fringilla et malesuada vitae, congue quis felis. Suspendisse sodales facilisis turpis eu egestas. Quisque id libero sed orci faucibus laoreet sit amet finibus sem. Ut lobortis, libero eget pharetra gravida, elit elit commodo massa, ut ornare lorem quam ac nisl. Cras dictum porttitor pulvinar. Etiam malesuada, augue vel tristique rutrum, orci odio dapibus arcu, imperdiet commodo diam sem vel neque. Curabitur semper magna ut venenatis facilisis. Nunc aliquet augue orci, id sollicitudin arcu luctus vitae. Vivamus in erat mauris. Donec non luctus turpis, vulputate finibus enim. Aenean turpis augue, faucibus non orci nec, pellentesque tincidunt augue. Fusce maximus eu mi non gravida.",
      },
      {
        id: "i3",
        date: "07.09.2022.",
        title: "Извештај стања новца за поправку крова",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at odio sed nulla rhoncus malesuada. Pellentesque metus quam, convallis eget massa eget, lobortis congue velit. Nunc ultrices vehicula interdum. Donec sit amet egestas metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium mollis suscipit. Aliquam rutrum blandit lacus. Morbi justo augue, dignissim eget consectetur et, volutpat quis dui. Fusce vehicula imperdiet rutrum. Donec iaculis magna risus, in aliquam leo ornare quis. Phasellus vel convallis felis. Aenean nec semper ipsum, quis luctus neque. Duis fringilla viverra odio, et viverra ligula venenatis eu. Maecenas molestie nulla a turpis tempus, vitae dictum ante suscipit. Pellentesque a felis ex. Pellentesque eleifend commodo magna. Nullam fringilla sit amet orci ut condimentum. Donec eget nulla sodales, consequat risus tempus, ultricies quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas pretium, ligula a ultricies consequat, sapien massa malesuada leo, eu consectetur ipsum ex eget ipsum. Suspendisse luctus vitae purus ac fringilla. Vestibulum imperdiet lectus nulla, sit amet egestas diam ullamcorper ut. Donec id massa est. Proin nec eros euismod, ultrices lectus ac, tincidunt ante. Nam consequat purus dapibus arcu aliquet elementum. Aenean nec ex in purus tempor dignissim. Sed auctor, odio quis facilisis vehicula, mauris quam dignissim libero, condimentum suscipit sapien turpis eget metus. Integer nec purus mi. Ut nec nibh eu lacus faucibus maximus. Vivamus imperdiet convallis eros, ut congue lorem porta tincidunt. Aenean tincidunt fringilla semper. Quisque pulvinar, turpis rutrum gravida lacinia, eros orci egestas libero, at luctus ligula nunc eu justo. Aliquam erat volutpat. Donec ac ante lorem. Nullam at erat risus. Maecenas dictum justo ac sem venenatis mollis. Vivamus vel euismod turpis, id vestibulum neque. In hac habitasse platea dictumst. Sed rutrum orci vitae metus suscipit efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce suscipit lectus sed turpis molestie euismod. Vestibulum urna nulla, fringilla et malesuada vitae, congue quis felis. Suspendisse sodales facilisis turpis eu egestas. Quisque id libero sed orci faucibus laoreet sit amet finibus sem. Ut lobortis, libero eget pharetra gravida, elit elit commodo massa, ut ornare lorem quam ac nisl. Cras dictum porttitor pulvinar. Etiam malesuada, augue vel tristique rutrum, orci odio dapibus arcu, imperdiet commodo diam sem vel neque. Curabitur semper magna ut venenatis facilisis. Nunc aliquet augue orci, id sollicitudin arcu luctus vitae. Vivamus in erat mauris. Donec non luctus turpis, vulputate finibus enim. Aenean turpis augue, faucibus non orci nec, pellentesque tincidunt augue. Fusce maximus eu mi non gravida.",
      },
      {
        id: "i4",
        date: "19.12.2022.",
        title: "Сакупљање новца за ремонтирање лифта",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at odio sed nulla rhoncus malesuada. Pellentesque metus quam, convallis eget massa eget, lobortis congue velit. Nunc ultrices vehicula interdum. Donec sit amet egestas metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium mollis suscipit. Aliquam rutrum blandit lacus. Morbi justo augue, dignissim eget consectetur et, volutpat quis dui. Fusce vehicula imperdiet rutrum. Donec iaculis magna risus, in aliquam leo ornare quis. Phasellus vel convallis felis. Aenean nec semper ipsum, quis luctus neque. Duis fringilla viverra odio, et viverra ligula venenatis eu. Maecenas molestie nulla a turpis tempus, vitae dictum ante suscipit. Pellentesque a felis ex. Pellentesque eleifend commodo magna. Nullam fringilla sit amet orci ut condimentum. Donec eget nulla sodales, consequat risus tempus, ultricies quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas pretium, ligula a ultricies consequat, sapien massa malesuada leo, eu consectetur ipsum ex eget ipsum. Suspendisse luctus vitae purus ac fringilla. Vestibulum imperdiet lectus nulla, sit amet egestas diam ullamcorper ut. Donec id massa est. Proin nec eros euismod, ultrices lectus ac, tincidunt ante. Nam consequat purus dapibus arcu aliquet elementum. Aenean nec ex in purus tempor dignissim. Sed auctor, odio quis facilisis vehicula, mauris quam dignissim libero, condimentum suscipit sapien turpis eget metus. Integer nec purus mi. Ut nec nibh eu lacus faucibus maximus. Vivamus imperdiet convallis eros, ut congue lorem porta tincidunt. Aenean tincidunt fringilla semper. Quisque pulvinar, turpis rutrum gravida lacinia, eros orci egestas libero, at luctus ligula nunc eu justo. Aliquam erat volutpat. Donec ac ante lorem. Nullam at erat risus. Maecenas dictum justo ac sem venenatis mollis. Vivamus vel euismod turpis, id vestibulum neque. In hac habitasse platea dictumst. Sed rutrum orci vitae metus suscipit efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce suscipit lectus sed turpis molestie euismod. Vestibulum urna nulla, fringilla et malesuada vitae, congue quis felis. Suspendisse sodales facilisis turpis eu egestas. Quisque id libero sed orci faucibus laoreet sit amet finibus sem. Ut lobortis, libero eget pharetra gravida, elit elit commodo massa, ut ornare lorem quam ac nisl. Cras dictum porttitor pulvinar. Etiam malesuada, augue vel tristique rutrum, orci odio dapibus arcu, imperdiet commodo diam sem vel neque. Curabitur semper magna ut venenatis facilisis. Nunc aliquet augue orci, id sollicitudin arcu luctus vitae. Vivamus in erat mauris. Donec non luctus turpis, vulputate finibus enim. Aenean turpis augue, faucibus non orci nec, pellentesque tincidunt augue. Fusce maximus eu mi non gravida.",
      },
    ],
    selectedId: selectedInfoId,
    idIsSelected: idIsSelected,
    showSinglePage: shouldShowSinglePage,
    giveId: idHandler,
    getUrl,
  };

  return (
    <InfoContext.Provider value={contextValue}>
      {props.children}
    </InfoContext.Provider>
  );
};

export default InfoContext;
