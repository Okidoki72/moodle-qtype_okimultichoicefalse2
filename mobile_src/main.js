// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

angular.module('mm.addons.qtype_mchoicefalse2', ['mm.core'])

.config(function($mmQuestionDelegateProvider) {
    $mmQuestionDelegateProvider.registerHandler('mmaQtypemchoicefalse2', 'qtype_mchoicefalse2', '$mmaQtypemchoicefalse2Handler');
});
