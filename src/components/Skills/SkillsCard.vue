<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title"><i :class="skill.icon"></i> {{skill.title}}</h3>
      <h5 class="card-subtitle mb-2 text-muted">{{skill.subheading}}</h5>
      <div class="bar" v-if="skill.level">
        Skill Level: {{skill.level}}
        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :aria-valuenow="skill.progress" :style="'width: ' + skill.progress + '%;'" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <p class="card-text" v-for="(description, dindex) in skill.description">{{description}}</p>
      <a v-if="skill.link" :href="skill.link" target="_blank" class="card-link btn btn-primary">
        More Info
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "SkillsCard",
  props: {
    skill: Object
  }
};
</script>

<style scoped lang="scss">
</style>
