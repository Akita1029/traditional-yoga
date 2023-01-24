import React from "react"
import "../../assets/css/classroom.css"
import { Row, Col } from "react-bootstrap"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { useParams } from 'react-router-dom'

const Classroom = (props) => {

  let { classId } = useParams()
  console.log(classId, props.location.search)
  return (
    <div
      className={
        !props.expandflag
          ? "dashboard-container expandable"
          : "dashboard-container"
      }
    >
      <Row>
        <h5 className="text-primary mb-3 x-title">Live Classroom</h5>
        <Col md={5} sm={12}>
          <img alt="classroomInfo"
            className="w-100 rounded"
            src={require("../../assets/images/Rectangle 43.png")}
          />
        </Col>
        <Col md={7} sm={12}>
          <h5 className="text-primary mb-3 x-title">Class Information</h5>
          <p><span className="mentor-title">Class Name:</span>&nbsp;(RYIT 200) Free Online Traditional</p>
          <p><span className="mentor-title">Place:</span>&nbsp;Lorem Ipsum is simply dummy text of the print</p>
          <p><span className="mentor-title">Mentor name:</span>&nbsp;Lorem Ipsum</p>
          <p><span className="mentor-title">Mentor PhoneNumber:</span>&nbsp;+123-456-7890</p>
          <p><span className="mentor-title">Class Members:</span>&nbsp;315</p>
          <button className="border-primary bg-primary rounded px-4 text-light py-1">Join Now</button>
        </Col>
      </Row>
      <Row>
        <h5 className="text-primary my-3 x-title">Resources</h5>
        <Tabs>
          <TabList className="resourceheader">
            <Tab>
              <div className="py-1 px-3">
                Description
              </div>
            </Tab>
            <Tab>
              <div className="py-1 px-3">
                Reviews
              </div>
            </Tab>
          </TabList>
          <div
            className="p-1 p-sm-4"
            style={{
              border: "1px solid #F96302",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              borderTop: "none",
              marginTop: "-10px",
            }}
          >
            <TabPanel className="row">
              <div className="col-12">
                <div className="d-flex flex-column justify-content-center align-items-start p-2 px-4">
                  <span className="content" style={{ fontSize: "12px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec augue arcu, condimentum vitae imperdiet eu, accumsan
                    vel erat. Aenean id nibh vel lorem malesuada fringilla.
                    Etiam nec justo mauris. Aenean dui est, dapibus et hendrerit
                    id, suscipit a quam. Vestibulum sollicitudin sapien vitae
                    arcu vehicula vestibulum. Curabitur vitae euismod orci.
                    Maecenas ac volutpat eros. Suspendisse blandit felis urna,
                    nec efficitur nulla iaculis sit amet. Vivamus lacus sem,
                    rhoncus et luctus nec, sollicitudin at purus. Nam mi magna,
                    consequat eget sagittis vel, eleifend nec nulla. Fusce
                    scelerisque sapien mi, nec gravida odio mollis quis.
                    Pellentesque vulputate nulla quis dictum lacinia. In hac
                    habitasse platea dictumst. Nullam libero justo, euismod eget
                    bibendum interdum, dignissim non metus. Morbi imperdiet est
                    augue, non facilisis urna facilisis sollicitudin. Cras lacus
                    lectus, sollicitudin quis massa et, iaculis volutpat ligula.
                    Nunc odio ante, consectetur non orci sit amet, consectetur
                    gravida lectus. Morbi tempor rhoncus consectetur. Cras eget
                    velit tempor, laoreet nisl sit amet, dictum dui. Maecenas
                    orci lorem, fringilla eu interdum non, ullamcorper non
                    metus. Mauris cursus, eros ac lacinia convallis, leo purus
                    efficitur ante, id varius leo turpis ut erat. Suspendisse
                    laoreet viverra nisl quis mattis. Vestibulum accumsan orci
                    eu metus blandit porta. Suspendisse magna turpis, malesuada
                    vel scelerisque condimentum, malesuada quis leo. Sed eu
                    velit accumsan, luctus diam rhoncus, condimentum lacus.
                    Vivamus mattis velit dolor, eu facilisis odio vulputate
                    vitae. Maecenas eleifend arcu vitae orci eleifend consequat.
                    Cras vitae accumsan sem. Aenean scelerisque commodo orci.
                    Praesent a nisl eros. Nullam efficitur mattis tellus, et
                    rutrum velit faucibus quis. Vivamus a arcu posuere, aliquet
                    nunc sed, facilisis lacus. Nam tincidunt libero id nisi
                    egestas volutpat. In tellus lectus, tempor eu risus non,
                    auctor commodo dolor. Sed mattis, justo sed scelerisque
                    dapibus, ex erat consectetur massa, sed commodo ligula nisl
                    ut lectus. Integer eu ante quis ligula scelerisque pretium.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam suscipit nisi id commodo pellentesque. Donec laoreet
                    enim libero, ut consequat quam eleifend vel. Aliquam et
                    ultrices diam, a placerat dui. Vivamus egestas viverra
                    lectus, eget dictum dolor imperdiet in. Nunc sollicitudin,
                    ligula in condimentum ultricies, augue libero eleifend orci,
                    non semper velit purus at tortor. Maecenas tincidunt, urna
                    viverra congue porttitor, velit erat ullamcorper purus, sed
                    pellentesque libero enim id felis. Mauris feugiat leo eget
                    venenatis finibus. Ut rutrum, libero ac blandit gravida,
                    arcu orci fermentum purus, id malesuada mi libero dignissim
                    neque. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Praesent tempus,
                    sapien sed varius volutpat, orci enim consequat justo, eu
                    dapibus est purus sit amet nibh. Nulla sed risus a massa
                    facilisis convallis. Maecenas vestibulum nunc et malesuada
                    condimentum. Vivamus vitae quam mollis, pulvinar dolor vel,
                    ultricies erat. Mauris justo sem, euismod congue egestas in,
                    volutpat a nulla. Donec dui lorem, convallis at nulla nec,
                    malesuada laoreet magna. In ac erat in velit rutrum
                    ullamcorper. Sed neque odio, aliquam a mattis non, imperdiet
                    id mi. Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Fusce gravida erat eu enim euismod viverra. Nunc
                    sit amet imperdiet ex. Nullam eu odio quam. Phasellus
                    placerat nibh a lorem pretium, quis ultrices orci tincidunt.
                    Sed imperdiet vehicula risus, in auctor sem ornare non.
                    Donec a odio eu ipsum sagittis viverra sed id leo. Quisque
                    quam felis, aliquet a risus at, porta pellentesque nisl.
                    Vivamus tempor libero vitae purus pulvinar scelerisque.
                    Vivamus rutrum vel dui quis elementum. Interdum et malesuada
                    fames ac ante ipsum primis in faucibus. Mauris in enim
                    finibus, ullamcorper arcu vitae, imperdiet leo. Maecenas
                    pharetra, sapien ac accumsan volutpat, nisl justo tempus
                    orci, non accumsan turpis nunc convallis nulla. Class aptent
                    taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus. Vestibulum eu odio sed tellus
                    sagittis rhoncus. Nam sem sem, efficitur posuere risus et,
                    tincidunt feugiat mauris. Morbi ligula felis, luctus et
                    interdum ut, semper in metus. Curabitur efficitur iaculis
                    pellentesque. Integer interdum ut tortor ut fringilla. Nam
                    aliquam risus nisi, vel venenatis leo luctus eu. Sed lacinia
                    egestas ex a tristique. Mauris ut arcu condimentum, faucibus
                    dui a, vulputate dui. Nulla quis sem nec velit tempus
                    consequat sit amet rhoncus metus. Aliquam sollicitudin neque
                    nec turpis sollicitudin, eget mattis lectus pretium.
                    Pellentesque porttitor orci quis dolor posuere, eget
                    ullamcorper massa luctus. Curabitur id iaculis augue,
                    commodo scelerisque felis. Phasellus non rutrum lorem, quis
                    pulvinar urna. Integer sed placerat ex, et maximus nisl.
                    Donec lacinia posuere mollis. Praesent sit amet felis ut
                    sapien condimentum volutpat quis sodales neque. Morbi id
                    rhoncus felis, at tempor est. Ut mattis faucibus tortor eget
                    pharetra. Maecenas eu erat ligula. Vivamus rutrum tellus
                    tincidunt, venenatis odio ut, rhoncus lectus. Mauris
                    consectetur risus pretium felis viverra, a pharetra lacus
                    facilisis. Sed porta nibh non diam rutrum, non pharetra urna
                    tempus. Proin condimentum porttitor elit, varius iaculis est
                    mollis nec. Nulla maximus tincidunt sem ut finibus. Cras
                    rhoncus, velit pretium auctor tincidunt, tortor mauris
                    tristique tortor, id congue sapien risus id lectus. Fusce
                    odio velit, rhoncus quis justo vitae, hendrerit porta dui.
                    Nullam eu quam ante. Nullam ut diam maximus, pulvinar augue
                    nec, cursus diam.
                  </span>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="row">
              <div className="col-12">
                <div className="d-flex flex-column justify-content-center align-items-start p-2 px-4">
                  <span className="content" style={{ fontSize: "12px" }}>
                    Dr Kumar is internationally recognized as an inspirational
                    yoga and meditation teacher aswell as an award-winning
                    scientist. His teaching is informed by his extensive
                    experiential and theoretical knowledge, developed through
                    his education in more than 37 schools of Hatha yoga and 50
                    traditions of meditation and progressed through decades of
                    self-practice. Nullam suscipit nisi id commodo pellentesque.
                    Donec laoreet enim libero, ut consequat quam eleifend vel.
                    Aliquam et ultrices diam, a placerat dui. Vivamus egestas
                    viverra lectus, eget dictum dolor imperdiet in. Nunc
                    sollicitudin, ligula in condimentum ultricies, augue libero
                    eleifend orci, non semper velit purus at tortor. Maecenas
                    tincidunt, urna viverra congue porttitor, velit erat
                    ullamcorper purus, sed pellentesque libero enim id felis.
                    Mauris feugiat leo eget venenatis finibus. Ut rutrum, libero
                    ac blandit gravida, arcu orci fermentum purus, id malesuada
                    mi libero dignissim neque. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                    Praesent tempus, sapien sed varius volutpat, orci enim
                    consequat justo, eu dapibus est purus sit amet nibh. Nulla
                    sed risus a massa facilisis convallis. Maecenas vestibulum
                    nunc et malesuada condimentum. Vivamus vitae quam mollis,
                    pulvinar dolor vel, ultricies erat. Mauris justo sem,
                    euismod congue egestas in, volutpat a nulla. Donec dui
                    lorem, convallis at nulla nec, malesuada laoreet magna. In
                    ac erat in velit rutrum ullamcorper. Sed neque odio, aliquam
                    a mattis non, imperdiet id mi. Interdum et malesuada fames
                    ac ante ipsum primis in faucibus. Fusce gravida erat eu enim
                    euismod viverra. Nunc sit amet imperdiet ex. Nullam eu odio
                    quam. Phasellus placerat nibh a lorem pretium, quis ultrices
                    orci tincidunt. Sed imperdiet vehicula risus, in auctor sem
                    ornare non. Donec a odio eu ipsum sagittis viverra sed id
                    leo. Quisque quam felis, aliquet a risus at, porta
                    pellentesque nisl. Vivamus tempor libero vitae purus
                    pulvinar scelerisque. Vivamus rutrum vel dui quis elementum.
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Mauris in enim finibus, ullamcorper arcu vitae,
                    imperdiet leo. Maecenas pharetra, sapien ac accumsan
                    volutpat, nisl justo tempus orci, non accumsan turpis nunc
                    convallis nulla. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos.
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Vestibulum eu odio sed tellus sagittis rhoncus.
                    Nam sem sem, efficitur posuere risus et, tincidunt feugiat
                    mauris. Morbi ligula felis, luctus et interdum ut, semper in
                    metus. Curabitur efficitur iaculis pellentesque. Integer
                    interdum ut tortor ut fringilla. Nam aliquam risus nisi, vel
                    venenatis leo luctus eu. Sed lacinia egestas ex a tristique.
                    Mauris ut arcu condimentum, faucibus dui a, vulputate dui.
                    Nulla quis sem nec velit tempus consequat sit amet rhoncus
                    metus. Aliquam sollicitudin neque nec turpis sollicitudin,
                    eget mattis lectus pretium. Pellentesque porttitor orci quis
                    dolor posuere, eget ullamcorper massa luctus. Curabitur id
                    iaculis augue, commodo scelerisque felis. Phasellus non
                    rutrum lorem, quis pulvinar urna. Integer sed placerat ex,
                    et maximus nisl. Donec lacinia posuere mollis. Praesent sit
                    amet felis ut sapien condimentum volutpat quis sodales
                    neque. Morbi id rhoncus felis, at tempor est. Ut mattis
                    faucibus tortor eget pharetra. Maecenas eu erat ligula.
                    Vivamus rutrum tellus tincidunt, venenatis odio ut, rhoncus
                    lectus. Mauris consectetur risus pretium felis viverra, a
                    pharetra lacus facilisis. Sed porta nibh non diam rutrum,
                    non pharetra urna tempus. Proin condimentum porttitor elit,
                    varius iaculis est mollis nec. Nulla maximus tincidunt sem
                    ut finibus. Cras rhoncus, velit pretium auctor tincidunt,
                    tortor mauris tristique tortor, id congue sapien risus id
                    lectus. Fusce odio velit, rhoncus quis justo vitae,
                    hendrerit porta dui. Nullam eu quam ante. Nullam ut diam
                    maximus, pulvinar augue nec, cursus diam.
                  </span>
                </div>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </Row>
    </div>
  );
};

export default Classroom;
