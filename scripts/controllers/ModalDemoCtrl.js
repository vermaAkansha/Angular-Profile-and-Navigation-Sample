'use strict';

angular.module('demo').controller('modalDemo', function($scope, $rootScope, $http) {
				$scope.leftVisible = false;
                $scope.rightVisible = false;
				
				$scope.close = function() {
                    $scope.leftVisible = false;
					$scope.rightVisible = false;
				};
				
                $scope.showLeft = function(e) {
                    $scope.leftVisible = true;
                    e.stopPropagation();
                };
                
                $scope.showRight = function(e) {
                    $scope.rightVisible = true;
                    e.stopPropagation();
                }
                
                $rootScope.$on("documentClicked", _close);
				$rootScope.$on("escapePressed", _close);
                
                function _close() {
                    $scope.$apply(function() {
                        $scope.close(); 
                    });
                }
				
			  $scope.currentPage = 1;
			  $scope.pageSize = 10;
			  $scope.range = new Array(5);

			  $scope.events = [];
			  $scope.profile = [];
			  $scope.tabData = [];
			  $scope.colors = ["#800026", "#bd0026", "#e31a1c", "#fc4e2a", "#fd8d3c", "#feb24c", "#fed976"];
			  var wordsList = [];
			  $scope.words = ["Hallo","Test","Lorem","Ipsum","Lorem","ipsum","dolor","sit","amet,","consetetur","sadipscing","elitr,","sed","diam","nonumy","eirmod","tempor","invidunt","ut","labore","et","dolore","magna","aliquyam","erat,","sed","diam"];				  
			  
			  
				var dataFiles = {
				 "home":"home_events.json",
				 "profile":"profile_info.json"
				};
				
				
				$http.get('home_events.json').success(function(data){
					console.log(data);
				    $scope.tabData = data;
			    });
				  	  
				/* $http.get('profile_info.json').success(function(data){					
					wordsList.push("Best " + data[0].pf_genre + " ever!");
					wordsList.push("" + data[0].pf_albums + " Albums");
					wordsList.push("" + data[0].pf_Gigs + " gigs");
					wordsList.push("" + data[0].pf_Tours + " tours");
					wordsList.push("" + data[0].pf_Corporate + " corporate shows");
					wordsList.push("" + data[0].pf_Contracts + " contracts");
					wordsList.push("Level " + data[0].pf_rating);
					wordsList.push("" + data[0].pf_singles + " singles");
					wordsList.push("Awesome!");				
					console.log("wordsList : "+wordsList);
					$scope.words = [];
					$scope.words = wordsList;
				  }); */
				
				 $scope.sendHttpReq = function(hashId){
					console.log(hashId);
					var fileName = dataFiles[hashId] 
					$http.get(fileName).success(function(data){					
					//$scope.$apply(function(){$scope.tabData = data;});
					$scope.tabData = data;
					console.log($scope.tabData);
					
					if(hashId === "profile"){
						console.log($scope);
						$scope.words = [];
						$scope.words.push("Best " + $scope.tabData[0].pf_genre + " ever!");
						$scope.words.push("" + $scope.tabData[0].pf_albums + " Albums");
						$scope.words.push("" + $scope.tabData[0].pf_Gigs + " gigs");
						$scope.words.push("" + $scope.tabData[0].pf_Tours + " tours");
						$scope.words.push("" + $scope.tabData[0].pf_Corporate + " corporate shows");
						$scope.words.push("" + $scope.tabData[0].pf_Contracts + " contracts");
						$scope.words.push("Level " + $scope.tabData[0].pf_rating);
						$scope.words.push("" + $scope.tabData[0].pf_singles + " singles");
						$scope.words.push("Awesome!");
						console.log($scope);
						//this.words = words; 
					}
					
				  });
				};
					
				 window.sendHttpReq = $scope.sendHttpReq;
			  
				  console.log($scope.words);
									  
				 /* for (var i = 1; i <= events.length; i++) {
					var event = events[Math.floor(Math.random() * dishes.length)];
					$scope.meals.push('Event ' + i + ': ' + event);
				  } */
				  
				  $scope.pageChangeHandler = function(num) {
					  console.log('meals page changed to ' + num);
				  };
			});