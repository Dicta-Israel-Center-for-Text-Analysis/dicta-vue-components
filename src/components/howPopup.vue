<template>
  <div class="modal fade in commom-modal howtous" id="about" tabindex="-1" role="dialog" aria-hidden="false">
    <div class="modal-dialog modal-lg how-to-modal-dialog">
      <!-- Modal content-->
      <div class="modal-content how-to-modal-content">
        <div class='popup-header-dev row no-gutters'>
          <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
            <div class='wrap-txt'>
              <h1 class='f black header-title'>How does it work? </h1>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <button type="button" data-dismiss="modal" class="common-close-btn"><i
              class="close-btn-icon fa fa-times"></i>Close
            </button>
            <button type="button" data-dismiss="modal" class="mobile-close-button"><i
              class="close-btn-icon fa fa-times"></i></button>
          </div>
        </div>
        <div class="how-to-inner-content">
          <p class="para">
            The DICTA Bible search engine allows users to easily search for words and phrases in the Bible, with no need
            to worry about spelling and word forms. Search results of one or more words will include verses in which the
            searched words appear, with appropriate variations of spelling and word form.
            <br/>
            Results appear in order of relevance, alternatively you can choose to have them presented in the customary
            order of biblical books.
          </p>
          <hr/>
          <h2 class="heading-h2">Manage your results</h2>
          <p class="para">
            Next to the results you will find tools to help you broaden or narrow your search.
            <br/>
            How are these tools used and how do they affect search results?
          </p>
          <h3 class="heading-h3">Meanings</h3>
          <p class="para">For each search word select the desired meaning. <br/>
            For example: if your search word is <strong>דוד</strong>, you can choose to limit your search to only
            <strong>דוד</strong>
            as in the name of a person, or <strong>דוד</strong> as in a family member.
            In addition, you can expand your results to include other words with the same meaning.<br/>
            For example: for the search word <strong>אריה</strong> you can also receive results including <strong>ליש
              לביא</strong> and <strong>כפיר</strong>.
          </p>
          <h3 class="heading-h3">Word forms</h3>
          <p class="para">Not yet fully implemented.</p>
          <p class="para">Limit the results to only word forms which you select. For example, if your search term is the
            generic term
            <strong>אריה</strong> you will also receive occurrences of <strong>לַאֲרָיֹות</strong> and
            <strong>הָאַרְיֵה</strong> as well as other forms of <strong>אריה</strong>, from which you can the select
            the
            relevant terms. Note, if your search term is specific, like <strong>לאריות</strong>, you will receive only
            that word form.
          </p>
          <h3 class="heading-h3">Books</h3>
          <p class="para">Select the books in which you would like to find your search terms.</p>
          <hr/>
          <h3>Example search terms and results:</h3>
          <ul class="list-ul">
            <li class="list-li">Search with root words <br/>
              For example: search <strong>ברא</strong>, and you will also get results for <strong>ויברא</strong>.
            </li>
            <li class="list-li">Full spelling/partial spelling <br/>
              For example: search <strong>דוד</strong>, and you will also get results for <strong>דויד</strong>.
            </li>
            <li class="list-li">Different suffixes, first/second/third person, male/female, singular/plural. <br/>

              Second person - <strong> אֹתְכָה/אֹותְךָ </strong> <br/>
              Second person, female - <strong> גַּרְתָּה/גַּרְתָּ</strong> <br/>
              Third person - <strong> כֻּלֹּה/כֻּלֹּו </strong>

            </li>

            <li class="list-li">Additional or missing <strong>א</strong>. <br/>
              Search for <strong>״ונטמאתם״</strong> , and get results for <strong>״וְנִטְמֵתֶם״</strong>.
            </li>
            <li class="list-li">Additional or missing <strong>ה</strong>. <br/>
              Search for <strong>״כָּמֹוךָ״</strong> , and get results for <strong>״כָמֹכָה״</strong>.
            </li>
            <li class="list-li">Interchangeable letters <br/>
              Search <strong>״ימלא״</strong> , and get results for <strong>״ימַלֵּה״</strong>. <br/>
              Search <strong>״וארסתיך״</strong>, and get results for <strong>״וְאֵרַשְׂתִּיךְ״</strong>.
            </li>
            <li class="list-li">All the different ways the bible refers to G-d <br/>
              Search for <strong>״א-להים״</strong> (sic) and get results for that term (spelled fully) only where it
              refers to God.
            </li>
            <li class="list-li">Search with numbers <br/>
              For example search for <strong>״127״</strong>, and get: <br/>
              <strong>״וַיִּהְיוּ חַיֵּי שָׂרָה מֵאָה שָׁנָה וְעֶשְׂרִים שָׁנָה וְשֶׁבַע שָׁנִים״</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'howPopup',
  data () {
    return {}
  }
}
</script>
<style scoped src="./styles/common-modal.css"></style>
<style scoped src="./styles/common-howToUse-popup.css"></style>
<style scoped>
  .how-to-modal-dialog {
    text-align: left;
  }

  .list-li {
    padding: 0 0 20px 18px;
  }

  .list-li:before {
    transform: rotate(180deg);
    left: 0;
  }

  @media screen and (max-width: 991px) {
  }

</style>
