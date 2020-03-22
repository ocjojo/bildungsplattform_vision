<template>
  <div class="side-bar">
    <div class="collabsable-list">
      <li>Meine Kurse</li>
      <ul>
        <li>Nachhaltiger Konsum</li>
        <li>Nachhaltigkeit einfach erklärt</li>
        <li>Digitale Werkstatt - Kuststudio</li>
        <li>Mathekurs Stufe 4</li>
      </ul>
    </div>
    <div class="collabsable-list">
      <li>Meine Räume</li>
      <ul>
        <li>Klasse 5a</li>
        <li>Nachhilfe Mathe</li>
        <li>Random</li>
      </ul>
    </div>
    <div class="collabsable-list">
      <li>Chat</li>
      <ul>
        <li>Paula</li>
        <li>Tosten</li>
        <li>Oscar</li>
        <li>Madlen</li>
        <li>Kim</li>
        <li>Jessica</li>
        <li>Emilia</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.side-bar {
  position: fixed;
  width: 270px;
  height: calc(100vh - 60px);
  left: 0px;
  top: 60px;
  background: $color-sidebar-background;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.collabsable-list {
  background: $color-sidebar-list-background;
  color: #fff;
  padding: 10px;
}
</style>